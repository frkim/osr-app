import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-800">
          OSR System
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <Link href="/request/new" className="text-gray-600 hover:text-blue-800 transition-colors">
            New Request
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-800 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
