import { Logo } from "./Logo"
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";

export function Header() {
  return (
    <header className="bg-gray-800 text-white w-full fixed top-0 z-50">
      <div className="flex justify-between itms-center px-1.5 md:px-4 py-2 md:pt-4">
        <Logo />
        <SearchBar />
        <UserActions />
      </div>
      <div className="mt-2 px-4 flex items-center gap-3.5 bg-gray-400 text-white">
        <MainNav />
      </div>
    </header>
  );
}