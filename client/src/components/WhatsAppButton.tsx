/**
 * WhatsApp Floating Button
 * 
 * Design Philosophy:
 * - Fixed floating button for lead generation
 * - Always visible and accessible
 * - Smooth animations
 */

import { MessageCircle } from "lucide-react";
import { COMPANY_WHATSAPP } from "@/../../shared/const";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP.replace(/\D/g, "")}?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
      title="Abrir WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
