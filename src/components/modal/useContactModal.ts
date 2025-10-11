// src/features/contact/useContactModal.ts
import { useState } from "react";

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<string | undefined>();

  const openModal = (ctx?: string) => {
    setContext(ctx);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal, context };
}
