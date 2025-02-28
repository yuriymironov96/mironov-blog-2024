import { auth0 } from "@/lib/auth0";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const session = await auth0.getSession();

  return <NavbarClient currentUser={session?.user} />;
}
