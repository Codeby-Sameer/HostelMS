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
      {/* Floating Button */}

      <Button
        size="icon"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl z-50"
      >
        <FaComments size={20} />
      </Button>

      {/* Chat Window */}

      {open && (
        <Card className="fixed bottom-24 right-6 w-[80vw] max-w-sm h-[420px] flex flex-col shadow-2xl z-50 backdrop-blur-xl">

          {/* Header */}

          <CardHeader className="flex flex-row items-center justify-between border-b p-4">

            <CardTitle className="flex items-center gap-2 text-sm font-semibold">
              <FaRobot />
              HostelBot
            </CardTitle>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </Button>

          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-0 min-h-0"> {/* 👈 VERY IMPORTANT */}

            <ScrollArea className="h-full w-full">

              <div className="p-4 space-y-4">

                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                  >

                    {/* Bot Avatar */}
                    {msg.from === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs shrink-0">
                        <FaRobot />
                      </div>
                    )}

                    {/* Message */}
                    <div
                      className={`max-w-[75%] px-4 py-2 text-sm rounded-2xl shadow-sm
              ${msg.from === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                        }
            `}
                    >
                      {msg.text}
                    </div>

                    {/* User Avatar */}
                    {msg.from === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs shrink-0">
                        <FaUser />
                      </div>
                    )}

                  </div>
                ))}

                {/* Typing */}
                {loading && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaRobot />
                    <span className="animate-pulse">Typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />

              </div>

            </ScrollArea>

          </CardContent>
          {/* Suggestions */}

          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleSuggestion(s)}
                  className="rounded-full"
                >
                  {s}
                </Button>
              ))}
            </div>
          )}

          {/* Input */}

          <CardFooter className="border-t p-3 flex gap-2">

            <Input
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <Button size="icon" onClick={sendMessage}>
              <FaPaperPlane size={14} />
            </Button>

          </CardFooter>

        </Card>
      )}
    </>
  )
}

export default ChatBot