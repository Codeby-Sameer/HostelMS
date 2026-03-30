import { useEffect, useRef, useState } from "react"
import {
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaRobot,
  FaUser
} from "react-icons/fa"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

import { botReplies } from "./chatBotData"

const SUGGESTIONS = [
  "Check room availability",
  "View pricing",
  "Contact admin"
]

const ChatBot = () => {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋 I’m HostelBot. How can I help you?" }
  ])

  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(scrollToBottom, [messages, loading])

  const handleBotReply = (text) => {
    setLoading(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: botReplies(text) }
      ])
      setLoading(false)
    }, 800)
  }

  const sendMessage = () => {
    if (!input.trim()) return

    const userText = input

    setMessages((prev) => [...prev, { from: "user", text: userText }])
    setInput("")

    handleBotReply(userText)
  }

  const handleSuggestion = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }])
    handleBotReply(text)
  }

  return (
    <>
      <Button
        size="icon"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border border-[#b9ddda] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white shadow-[0_18px_35px_rgba(13,92,99,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_42px_rgba(13,92,99,0.34)]"
      >
        <FaComments size={20} />
      </Button>

      {open && (
        <Card className="fixed bottom-24 right-6 z-50 flex h-[460px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-[1.75rem] border border-[#cfe8e6] bg-white/95 shadow-[0_28px_70px_rgba(13,92,99,0.22)] backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between border-b border-[#d7e7e4] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] p-4.5 text-white">
            <CardTitle className="flex items-center gap-3 text-sm font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/15">
                <FaRobot />
              </span>
              <span>
                <span className="block text-base font-bold">HostelBot</span>
                <span className="block text-xs font-medium text-white/80">
                  Instant support assistant
                </span>
              </span>
            </CardTitle>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-full text-white hover:bg-white/15 hover:text-white"
            >
              <FaTimes />
            </Button>
          </CardHeader>

          <CardContent className="min-h-0 flex-1 bg-[linear-gradient(180deg,#f8fcfb_0%,#f3f8f7_100%)] p-0">
            <ScrollArea className="h-full w-full">
              <div className="space-y-4 p-4.5">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-end gap-2 ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.from === "bot" && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-sm text-white shadow-sm">
                        <FaRobot />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3.5 text-[15px] shadow-sm ${
                        msg.from === "user"
                          ? "rounded-br-none bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white"
                          : "rounded-bl-none border border-[#d7e7e4] bg-white text-slate-700"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.from === "user" && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9dd9d2] text-sm text-[#0d5c63] shadow-sm">
                        <FaUser />
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f4f3] text-[#0d5c63]">
                      <FaRobot />
                    </span>
                    <span className="animate-pulse">Typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-[#e2efed] bg-white px-3 pb-2 pt-3">
              {SUGGESTIONS.map((s, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleSuggestion(s)}
                  className="rounded-full border border-[#d7e7e4] bg-[#f4fbfa] text-[#0d5c63] hover:bg-[#e6f4f3]"
                >
                  {s}
                </Button>
              ))}
            </div>
          )}

          <CardFooter className="flex gap-2 border-t border-[#d7e7e4] bg-white p-4">
            <Input
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="h-12 rounded-xl border-[#d7e7e4] bg-[#f8fbfb] text-[15px] text-slate-700 placeholder:text-slate-400 focus-visible:ring-[#0d5c63]/20"
            />

            <Button
              size="icon"
              onClick={sendMessage}
              className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white hover:from-[#09454a] hover:to-[#166774]"
            >
              <FaPaperPlane size={15} />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default ChatBot
