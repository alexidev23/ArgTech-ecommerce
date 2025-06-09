import Image from "next/image";
import { Button } from "../ui/button";
import { CartIcon } from "../icons/Iconos";
import Link from "next/link";

const productosTecnologia = [
  {
    id: 1,
    nombre: "Smartphone Samsung Galaxy A54",
    precio: 299.99,
    descuento: 10,
    imagen: "/item1.webp"
  },
  {
    id: 2,
    nombre: "Notebook Lenovo IdeaPad 3",
    precio: 599.99,
    descuento: 15,
    imagen: "/item1.webp"
  },
  {
    id: 3,
    nombre: "Auriculares Bluetooth Sony WH-CH520",
    precio: 79.99,
    descuento: 20,
    imagen: "/item1.webp"
  },
  {
    id: 4,
    nombre: "Monitor LG UltraGear 24'' Full HD",
    precio: 199.99,
    descuento: 5,
    imagen: "/item1.webp"
  },
  {
    id: 5,
    nombre: "Mouse Logitech G203 RGB",
    precio: 34.99,
    descuento: 12,
    imagen: "/item1.webp"
  },
  {
    id: 6,
    nombre: "Teclado Mecánico Redragon Kumara",
    precio: 59.99,
    descuento: 8,
    imagen: "/item1.webp"
  },
  {
    id: 7,
    nombre: "Tablet Xiaomi Pad 6",
    precio: 399.99,
    descuento: 18,
    imagen: "/item1.webp"
  },
  {
    id: 8,
    nombre: "Parlante Bluetooth JBL Flip 6",
    precio: 129.99,
    descuento: 10,
    imagen: "/item1.webp"
  },
  {
    id: 9,
    nombre: "Smartwatch Amazfit GTS 4",
    precio: 149.99,
    descuento: 25,
    imagen: "/item1.webp"
  }
];

export function CategoryCardProduct() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {productosTecnologia.map(({ id, nombre, imagen, precio, descuento }) => {
        const precioFinal = (precio * (1 - descuento / 100)).toFixed(2);

        return (
          <Link href={`/product/${nombre}`}
            key={id}
            className="border h-[370px] md:h-[420px] w-[300px] rounded-lg overflow-hidden shadow"
          >
            <div className="bg-white h-[160px] md:h-[200px] flex items-center justify-center box-border">
              <Image
                src={imagen}
                alt={nombre}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="h-[220px] flex flex-col items-start justify-around px-2.5 border">
              <p className="font-medium text-lg mt-2">{nombre}</p>
              <p className="text-lg font-bold">${precioFinal}</p>
              <div className="flex items-center justify-between gap-1.5">
                <p className="text-sm font-bold text-gray-500 line-through">${precio}</p>
                <span className="bg-cyan-600 px-1.5 text-sm py-0.5 rounded-sm">
                  %{descuento}
                </span>
              </div>
              <Button className="mx-auto bg-cyan-950 text-white cursor-pointer hover:bg-cyan-700">
                <CartIcon />
                Agregar al carrito
              </Button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}