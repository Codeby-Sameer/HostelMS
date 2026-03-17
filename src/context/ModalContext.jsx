import { createContext, useContext, useState } from "react"

const ModalContext = createContext(null)

export const useModal = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider")
  }

  return context
}

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [editingItem, setEditingItem] = useState(null)

  const openModal = (type, item = null) => {
    setModalType(type)
    setEditingItem(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalType(null)
    setEditingItem(null)
  }

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        modalType,
        editingItem,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}