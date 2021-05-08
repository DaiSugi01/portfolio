import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-main fixed top-0 right-0 z-10">
      <div className="flex justify-end items-center pr-8 h-14">
        <div className="flex space-x-4 text-lg">
          <Link href="/">
            <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </a>
          </Link>

          <Link href="/about-me">
            <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
              About
            </a>
          </Link>

          <Link href="/projects">
            <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
              Projects
            </a>
          </Link>

          <Link href="/projects">
            <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
