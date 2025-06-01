import { AdsCarousel } from "@/components/ads/AdsCarousel";
import { CaruselInfinito } from "@/components/ads/CaruselInfinito";
import { SeparadorAds } from "@/components/ads/Separador-ads";
import { CardInfo } from "@/components/CardInfo";
import { CategoryProducts } from "@/components/category-productos/CategoryProducts";
import { Footer } from "@/components/footer/Footer";
import { ProductosDelDia } from "@/components/home/ProductosDelDia";

export default function Home() {
  return (
    <main>
      <AdsCarousel />
      <ProductosDelDia />
      <SeparadorAds />
      <CategoryProducts />
      <CategoryProducts />
      <CaruselInfinito />
      <CategoryProducts />
      <CardInfo />
      <Footer />
    </main>
  );
}
