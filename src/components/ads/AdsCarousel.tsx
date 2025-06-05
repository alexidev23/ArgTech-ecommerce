// app/components/PublicidadSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/ads/ads-1.jpg', alt: 'Publicidad de Tecnologia' },
  { id: 2, image: '/ads/ads-2.png', alt: 'Publicidad de Tecnologia' },
  { id: 3, image: '/ads/ads-3.png', alt: 'Publicidad de Tecnologia' },
  { id: 4, image: '/ads/ads-4.jpg', alt: 'Publicidad de Tecnologia' },
  { id: 5, image: '/ads/ads-5.jpg', alt: 'Publicidad de Tecnologia' },
];

export function AdsCarousel() {
  return (
    <div className="w-full mx-auto lg:h-[360px] mt-24">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="overflow-hidden h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image 
              src={slide.image} 
              alt={slide.alt}
              width={1920}
              height={504}
              className="object-cover" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
