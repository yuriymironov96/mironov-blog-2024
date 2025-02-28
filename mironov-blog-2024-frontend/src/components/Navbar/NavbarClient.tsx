"use client";
import { User } from "@auth0/nextjs-auth0/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavbarClientProps {
  currentUser?: User;
}

export default function NavbarClient({ currentUser }: NavbarClientProps) {
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 align-center">
      <div className="flex items-baseline gap-4">
        <Link href="/" className={pathName === "/" ? "font-bold" : ""}>
          Mironov Blog
        </Link>
        <Link
          href="/about"
          className={pathName === "/about" ? "font-bold" : ""}
        >
          About
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {currentUser ? (
          <>
            <Link href={`/profile/`}>{currentUser.nickname}</Link>
            <a href="/auth/logout">Logout</a>
          </>
        ) : (
          <>
            <a href="/auth/login?screen_hint=signup">Login</a>
            <a href="/auth/login">Register</a>
          </>
        )}
      </div>
    </nav>
  );
}
