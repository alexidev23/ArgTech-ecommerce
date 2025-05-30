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

export function ProductosCarrusel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full border"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="border h-[350px] w-[300px] rounded-lg overflow-hidden">
              <div className="bg-white h-[200px] flex items-center justify-center box-border">
                <Image
                  src="/item1.webp"
                  alt="Imagen del producto"
                  width={150}
                  height={150}
                  className="object-contain" 
                />
              </div>
              <div className="h-[150px] flex flex-col items-center justify-around border">
                <p className="font-medium text-center mt-2">Calefactor CI080 Liliana fijo 1400W</p>
                <p className="text-lg font-bold">$69.000</p>
                <Button className="">Agregar al carrito</Button>
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