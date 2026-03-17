import { Suspense } from "react"
import { useModal } from "@/context/ModalContext"

import { formRegistry } from "./formRegistry"
import { modalTitles } from "./modalTitles"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const Modal = () => {
  const { modalOpen, modalType, editingItem, closeModal } = useModal()

  if (!modalType) return null

  const FormComponent = formRegistry[modalType]

  const title = editingItem
    ? modalTitles[modalType]?.edit
    : modalTitles[modalType]?.create

  return (
    <Dialog open={modalOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0">

        {/* header */}
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {/* scrollable content */}
        <div className="overflow-y-auto px-6 py-4 max-h-[75vh]">

          <Suspense fallback={<div className="p-4">Loading...</div>}>
            {FormComponent && (
              <FormComponent
                editingItem={editingItem}
                onClose={closeModal}
              />
            )}
          </Suspense>

        </div>

      </DialogContent>
    </Dialog>
  )
}

export default Modal