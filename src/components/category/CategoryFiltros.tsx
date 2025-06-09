export function CategoryFiltros () {
  return (
    <div className="flex flex-col gap-4 px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <button className="text-sm text-blue-500 hover:underline cursor-pointer">clear</button>
      </div>
      <div className="border p-4 rounded-md lg:w-[250px]">
        filtros
      </div>
    </div>
  );
}