'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-4">
        <Link href="/" className={pathname === "/" ? "font-bold text-xl" : ""}>Mironov Blog</Link>
        <Link href="/about" className={pathname === "/about" ? "font-bold text-xl" : ""}>
          About
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* those will be outside links */}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}
