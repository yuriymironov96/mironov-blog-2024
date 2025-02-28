'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 align-center">
      <div className="flex items-baseline gap-4">
        <Link href="/" className={pathname === "/" ? "font-bold text-l" : ""}>Mironov Blog</Link>
        <Link href="/about" className={pathname === "/about" ? "font-bold text-l" : ""}>
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
