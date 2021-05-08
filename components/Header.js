import Link from "next/link";

export default function Header() {
  const scrollToTarget = (x, y) => {

    if (x > 0) {
      let elHeight = document.getElementsByTagName('main')[0].clientHeight
      y = elHeight - 790
    }

    window.scrollTo(x, y);
  }

  return (
    <nav className="w-main fixed top-0 right-0 z-10">
      <div className="flex justify-end items-center pr-8 h-14">
        <div className="flex space-x-4 text-lg">
            <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer" onClick={() => scrollToTarget(0, 0)}>
              Home
            </p>

          <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer" onClick={() => scrollToTarget(0, 760)}>
            About
          </p>

            <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer" onClick={() => scrollToTarget(0, 2040)}>
              Projects
            </p>

            <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer" onClick={() => scrollToTarget(1, 1)}>
              Contact
            </p>
        </div>
      </div>
    </nav>
  );
}
