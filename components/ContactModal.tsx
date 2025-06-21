"use client"

import { Modal } from "@/components/Modal"
import { ContactForm } from "@/components/ContactForm"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Teklif Alın">
      <ContactForm onSuccess={onClose} />
    </Modal>
  )
}
