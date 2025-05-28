import { SearchIcon } from "../icons/Iconos";

export function SearchBar() {
  return (
    <div className="flex items-center bg-gray-200 rounded-full border w-[350px]">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none flex-grow px-4 text-black"
      />
      <button className="bg-blue-600 text-white px-2 py-2 rounded-full">
        <SearchIcon />
      </button>
    </div>
  );
}