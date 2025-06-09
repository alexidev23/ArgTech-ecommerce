import { CaruselInfinito } from "@/components/ads/CaruselInfinito";
import { ProductNav } from "@/components/Product/ProductNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { id } = params;

  // Acá podrías hacer fetch a datos de productos según la categoría "id"
  // const data = await fetchCategoryData(id)

  if (!id) return notFound();

  const producto = [
  {
    id: 1,
    nombre: "Smartphone Samsung Galaxy A54",
    precio: 299.99,
    descuento: 10,
    imagen: "/item1.webp",
    descripcion: "Experimentá un rendimiento superior y una experiencia visual inmersiva con el Samsung Galaxy A54, un smartphone diseñado para ofrecerte la mejor relación entre calidad y precio. Equipado con una pantalla Super AMOLED de 6.4 pulgadas con resolución Full HD+, este dispositivo garantiza colores vibrantes, negros profundos y una fluidez excepcional gracias a su tasa de refresco de 120Hz. En su interior, el Galaxy A54 incorpora un potente procesador Exynos 1380 que, junto a sus 8 GB de RAM, te permite ejecutar múltiples aplicaciones a la vez sin demoras. Con 128 GB de almacenamiento interno, ampliables mediante tarjeta microSD, nunca te vas a quedar sin espacio para tus fotos, videos y apps favoritas. Su sistema de cámaras está diseñado para capturar cada momento con calidad profesional: cámara principal de 50 MP con estabilización óptica (OIS), cámara ultra gran angular de 12 MP, cámara macro de 5 MP y cámara frontal de 32 MP para selfies claras. La batería de 5000 mAh te acompaña todo el día y más, con soporte para carga rápida de 25W. El Galaxy A54 también cuenta con resistencia al agua y polvo (IP67), lector de huellas bajo pantalla, conectividad 5G, Wi-Fi 6, NFC y viene con Android 13 y la interfaz One UI 5.1. ¡Aprovechá el 10% de descuento y llevate un smartphone confiable, moderno y potente, ideal para el día a día o el trabajo!"
  }]

  return (
    <main className="mt-[104px] border">
      <ProductNav id={id} />
      {producto.map(({ id, nombre, imagen, precio, descuento, descripcion }) => {
        const precioFinal = (precio * (1 - descuento / 100)).toFixed(2);
        return (
          <div key={id} className="border-t-2 border-white mx-10 pt-5 pb-10">
            <h1 className="text-4xl font-semibold pb-5">{nombre}</h1>
            <div className="flex border-b-2 border-white pb-10">
              <div className="border-r-2 border-white mr-2 bg-white w-[800px] h-[500px] flex items-center justify-center">
                <Image
                  src={imagen}
                  alt={nombre}
                  width={400}
                  height={400}
                  className=" object-cover"
                />
              </div>
              <div className="w-[400px] ml-6">
                <div className="border-l-4 border-green-800 h-fit py-5 px-4">
                  <p className="text-lg font-bold text-gray-500 line-through">${precio}</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-4xl font-bold">${precioFinal}</p>
                    <span className="bg-cyan-600 px-1.5 text-lg font-bold py-0.5 rounded-sm">
                      %{descuento} OFF
                    </span>
                  </div>
                </div>
                <div className="py-10">
                  <Button className="mx-auto bg-cyan-950 text-white cursor-pointer hover:bg-cyan-700 w-full text-2xl py-8 rounded-4xl">
                    <span>Agregar al carrito</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="px-3.5 pt-8">
              <h2 className="text-3xl font-bold pb-3.5">Descripcion</h2>
              {descripcion}
            </div>
          </div>
        )})}
        <CaruselInfinito />
    </main>
  );
}
