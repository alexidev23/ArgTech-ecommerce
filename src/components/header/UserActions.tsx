import Link from "next/link";
import { CartIcon, HeartIcon, UserIcon } from "../icons/Iconos";
import { ModeToggle } from "../mode-toggle";

export function UserActions() {
  return (
    <div className="flex items-center gap-2.5">
      <Link href='#' className="rounded-full">
        <CartIcon />
      </Link>
      <Link href='#' className="rounded-full">
        <HeartIcon />
      </Link>
      <Link href='#' className="rounded-full">
        <UserIcon />
      </Link>
      <ModeToggle />
    </div>
  );
}