import Image from "next/image";

export function SeparadorAds() {
  return (
    <div className="w-full my-16 flex justify-center">
      <Image
        src="/ads/separador-ads-1.webp"
        alt="Separador de anuncios"
        width={770}
        height={146}
      />
    </div>
  );
}