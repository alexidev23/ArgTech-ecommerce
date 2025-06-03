import { CardCreditIcon, TruckIcon } from "./icons/Iconos";

export function CardInfo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-16 gap-6">
      <div className="bg-teal-900 px-6 py-4 rounded-2xl flex items-center justify-around gap-2.5 w-[300px]">
        <div className="bg-white p-2 rounded-full">
          <CardCreditIcon color="#003C43" height={40} width={40} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Paga en 12 cuotas</span>
          <span>con las principales</span>
          <span>tarjetas de credito</span>
        </div>
      </div>
      <div className="bg-teal-900 px-6 py-4 rounded-2xl flex items-center justify-around gap-2.5 w-[300px]">
        <div className="bg-white p-2 rounded-full">
          <TruckIcon color="#003C43" height={40} width={40} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Recibí tu producto</span>
          <span>en mas de 100 puntos</span>
          <span>en todo el pais</span>
        </div>
      </div>
    </div>
  );
}