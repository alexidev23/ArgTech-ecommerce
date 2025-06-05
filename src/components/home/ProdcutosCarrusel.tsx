import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "../ui/button"
import { CartIcon } from "../icons/Iconos"

export function ProductosCarrusel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="border h-[370px] md:h-[410px] w-[220px] rounded-lg overflow-hidden">
              <div className="bg-white h-[160px] md:h-[200px] flex items-center justify-center box-border">
                <Image
                  src="/item1.webp"
                  alt="Imagen del producto"
                  width={100}
                  height={100}
                  className="object-contain" 
                />
              </div>
              <div className="h-[210px] flex flex-col items-start justify-around px-2.5 border">
                <p className="font-medium text-xl mt-2">Calefactor CI080 Liliana fijo 1400W</p>
                <p className="text-lg font-bold">$69.000</p>
                <div className="flex items-center justify-between gap-1.5">
                  <p className="text-sm font-bold text-gray-500 line-through">$69.000</p>
                  <span className="bg-cyan-600 px-1.5 text-sm py-0.5 rounded-sm">%15</span>
                </div>
                <Button className="mx-auto bg-cyan-950 text-white cursor-pointer hover:bg-cyan-700">
                  <CartIcon />
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}