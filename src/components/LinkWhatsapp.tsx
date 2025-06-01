import { WhatsappIcon } from "./icons/Iconos";

export function LinkWhatsapp () {
  return (
    <a href="#" className="w-20 h-20 flex items-center justify-center rounded-full fixed bottom-4 right-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <WhatsappIcon 
        height={60}
        width={60}
      />
    </a>
  )
}