import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl text-gray-900">
          NayePankh Foundation
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/volunteer"
            className="hover:text-blue-600 transition"
          >
            Volunteer
          </Link>

          <Link
            href="/admin"
            className="hover:text-blue-600 transition"
          >
            Admin
          </Link>

        </div>

      </div>
    </nav>
  );
}