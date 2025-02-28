import { auth0 } from "@/lib/auth0";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth0.getSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 align-center">
      <div className="flex items-baseline gap-4">
        <Link href="/">Mironov Blog</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <Link href={`/profile/`}>{session.user.name}</Link>
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
