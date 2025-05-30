import { WhatsappIcon } from "./icons/Iconos";

export function LinkWhatsapp () {
  return (
    <a href="#" className="bg-blue-600 w-20 h-20 flex items-center justify-center rounded-full fixed bottom-4 right-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <WhatsappIcon 
        height={50}
        width={50}
      />
    </a>
  )
}