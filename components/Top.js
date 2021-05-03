import Link from "next/link";

export default function Top() {
  return (
    <div className="h-screen w-full">
      <Link href="/about-me">
        <div className="h-main w-full">
          <a className="text-4xl cursor-pointer relative top-1/2 text-center">
            <p className="text-4xl">Daiki Sugihara</p>
            <p className="text-sm">iOS developer / Backend developer</p>
          </a>
        </div>
      </Link>
    </div>
  );
}
