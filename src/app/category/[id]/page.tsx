// app/category/[id].tsx

import { CategoryCardProduct } from "@/components/category/CategoryCardProduct";
import { CategoryFiltros } from "@/components/category/CategoryFiltros";
import { CategoryNav } from "@/components/category/CategoryNav";
import { CategoryOrden } from "@/components/category/CategoryOrden";
import { CategoryPagination } from "@/components/category/CategoryPagination";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  // Acá podrías hacer fetch a datos de productos según la categoría "id"
  // const data = await fetchCategoryData(id)

  if (!id) return notFound();

  return (
    <main className="pt-28">
      <CategoryNav id={id} />
      {/* Mostrar productos de la categoría */}
      <div className="border">
        <div className="flex gap-1.5 items-center justify-end px-10 py-3">
          <h2>Ordernar por</h2> 
          <CategoryOrden />
        </div>
        <div className="flex justify-between">
          <div>
            <CategoryFiltros />
          </div>
          <div className="px-10">
            <CategoryCardProduct />
            <div className="flex items-center py-10">
              <CategoryPagination />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
