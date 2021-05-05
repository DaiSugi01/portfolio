import Link from "next/link";
import Image from "next/image";

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

          <div className="flex min-w-min">
            <a href="tel:volble124@gmail.com">
              <Image
                className="px-3 py-2"
                src="/images/phone.svg"
                width={30}
                height={30}
                alt="phone"
              />
            </a>
            <p className="px-2 py-2">+1 (236) 888 7246</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
