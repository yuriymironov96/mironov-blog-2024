export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-4">
        <a href="/" className="font-bold text-xl">
          Mironov Blog
        </a>
        <a href="/about">About</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}
