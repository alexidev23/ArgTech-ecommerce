import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProductosCarrusel } from "./ProdcutosCarrusel"

export function ProductosDelDia () {
  return (
    <Tabs defaultValue="vendidos" className="mx-auto my-20 w-full md:w-[1000px]">
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