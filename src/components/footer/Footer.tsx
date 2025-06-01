import Link from "next/link";
import { FacebookIcon, InstagramIcon, PinMapIcon, XIcon, YoutubeIcon } from "../icons/Iconos";

export function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-10 relative">
      <div className="flex justify-around">
        <div className="">
          <h1 className="font-extrabold text-3xl">ArgTech</h1>
        </div>
        <div>
          <h4 className="font-bold text-xl">Categorias</h4>
          <ul className="text-gray-400">
            <li>Componentes PC</li>
            <li>Notebooks</li>
            <li>Monitores</li>
            <li>Perifericos</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl">Lo mas buscado</h4>
          <ul className="text-gray-400">
            <li>Notebooks</li>
            <li>Monitores</li>
            <li>Perifericos</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl">ArgTech</h4>
          <ul className="text-gray-400">
            <li>Sobre nosotros</li>
            <li>Trabajá con nosotros</li>
            <li>Sucursales</li>
            <li>Información Legal</li>
            <li>Venta Empresas</li>
          </ul>
        </div>
        <div className="w-[300px]">
          <h4 className="font-bold text-xl">Informacion</h4>
          <ul className="text-gray-400">
            <li>Centro de Ayuda</li>
            <li>Contactanos</li>
            <li>Botón de Arrepentimiento</li>
            <li>Libro de Quejas Online</li>
            <li>Ventanilla Federal Única de Reclamos de Defensa del Consumidor</li>
            <li>Contrato de adhesión ley 24.240 de Defensa al Consumidor - Usuarios Servicios Financieros</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-28 px-12 my-4">
        <div>
          <h4 className="font-bold text-xl">Seguinos en:</h4>
          <div className="flex items-center gap-4 py-1.5">
            <Link href="https://www.facebook.com/argtechok" target="_blank" rel="noopener noreferrer">
              <FacebookIcon width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/argtechok" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/argtechok" target="_blank" rel="noopener noreferrer">
              <XIcon width={20} height={20} />
            </Link>
            <Link href="https://www.facebook.com/argtechok" target="_blank" rel="noopener noreferrer">
              <InstagramIcon width={24} height={24} />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">Ubicacion:</h4>
          <div className="flex items-center gap-1.5 py-1.5">
            <PinMapIcon width={20} height={20} />
            <p>Av. Corrientes 1234, Buenos Aires, Argentina</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">Dias y Horarios:</h4>
          <p className="mt-1.5">Lunes a Viernes: 9:00 a 18:00</p>
          <p>Sábados: 10:00 a 14:00</p>
        </div>
      </div>
      <div className="text-gray-400 text-center block mt-4 text-xs">
        Proyecto realizado por <Link href="https://www.argtech.com.ar"  target="_blank" rel="noopener noreferrer" className="text-white font-bold">AlexiDev23</Link>
      </div>
    </footer>
  );
}