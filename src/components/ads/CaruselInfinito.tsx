"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

const sponsors = [
  { id: 1, logo: "/sponsors/amd.png", alt: "Sponsor AMD" },
  { id: 2, logo: "/sponsors/aorusblanco.png", alt: "Sponsor Aorus" },
  { id: 3, logo: "/sponsors/apple_carrucel.png", alt: "Sponsor Apple" },
  { id: 4, logo: "/sponsors/asus.png", alt: "Sponsor Asus" },
  { id: 5, logo: "/sponsors/gigabyte.png", alt: "Sponsor Gigabyte" },
  { id: 6, logo: "/sponsors/hyperx.png", alt: "Sponsor Hyperx" },
  { id: 7, logo: "/sponsors/logitech.png", alt: "Sponsor Logitech" },
  { id: 8, logo: "/sponsors/msi.png", alt: "Sponsor MSI" },
  { id: 9, logo: "/sponsors/corsair.png", alt: "Sponsor Corsair" },
  { id: 10, logo: "/sponsors/nvidia-2.png", alt: "Sponsor Nvidia" },
  { id: 11, logo: "/sponsors/redragon-2.png", alt: "Sponsor Redragon" },
  { id: 12, logo: "/sponsors/samsung.png", alt: "Sponsor Samsung" },
  { id: 13, logo: "/sponsors/view_sonic-2.png", alt: "Sponsor View Sonic" },
]

export function CaruselInfinito() {
    const plugin = useRef(
    Autoplay({ delay: 500, stopOnInteraction: false })
  )

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto py-4 my-16"
    >
      <CarouselContent>
        {sponsors.map((sponsor) => (
          <CarouselItem
            key={sponsor.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center items-center"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.alt}
              width={100}
              height={100}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
