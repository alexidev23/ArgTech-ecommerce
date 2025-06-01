import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProductosCarrusel } from "./ProdcutosCarrusel"

export function ProductosDelDia () {
  // const products = {
  //   vendidos: [
  //     { id: 1, nombre: "Calefactor CIO80 Liliana fijo 1400W", precio: 69000, imagen: "/img1.jpg" },
  //     { id: 2, nombre: "Otro calefactor", precio: 71000, imagen: "/img2.jpg" },
  //     { id: 3, nombre: "Otro más", precio: 72000, imagen: "/img3.jpg" },
  //     { id: 4, nombre: "Más productos", precio: 65000, imagen: "/img4.jpg" },
  //   ],
  //   vistos: [
  //     { id: 5, nombre: "Producto visto", precio: 73000, imagen: "/img5.jpg" },
  //     { id: 6, nombre: "Otro calefactor", precio: 71000, imagen: "/img2.jpg" },
  //     { id: 7, nombre: "Otro más", precio: 72000, imagen: "/img3.jpg" },
  //     { id: 8, nombre: "Más productos", precio: 65000, imagen: "/img4.jpg" },
  //   ]
  // }
  return (
    <Tabs defaultValue="vendidos" className="mx-auto my-20 w-[1000px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="vendidos">Los mas vendidos</TabsTrigger>
        <TabsTrigger value="vistos">Los mas vistos</TabsTrigger>
      </TabsList>
      <TabsContent value="vendidos">
        <ProductosCarrusel />
      </TabsContent>
      <TabsContent value="vistos">
        <ProductosCarrusel />
      </TabsContent>
    </Tabs>
  );  
}