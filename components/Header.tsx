import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="h-16 px-4 flex flex-row bg-amber-700 items-center justify-between">
      <Link href="/">
        <div id="logo" className="font-extrabold text-3xl text-white mr-4">
          My personal library
        </div>
      </Link>

      <Button>
        <Link href="/login" className="text-white">
          Login
        </Link>
      </Button>
    </header>
  );
}
