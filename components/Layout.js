import Head from "next/head";
import Link from "next/link";
import Image from "next/image"


export default function Layout({ children, title = "Hp by Nextjs"}) { 
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-sm font-momo bg-gray-900 text-gray-300">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="flex w-screen h-14">
          
          <div>
            <nav className="w-32 min-h-screen bg-gray-800 fixed top-0">
              <div className="flex flex-col items-center min-h-screen">
                <a href="https://github.com/DaiSugi01" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  <Image
                  className="fill-current"
                  src="/github.svg"
                  width={40}
                  height={40}
                  alt="github"
                  />
                </a>

                <a href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/" target="_blank" rel="noopener noreferrer" className="border-white text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  <Image
                  className="fill-current"
                  src="/linkedin.svg"
                  width={30}
                  height={30}
                  alt="github"
                  />
                </a>

                <a href="mailto:volble124@gmail.com" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  <Image
                  className="fill-current"
                  src="/mail.svg"
                  width={30}
                  height={30}
                  alt="github"
                  />
                </a>

              </div>
            </nav>
          </div>

          <nav className="w-screen min-w-min fixed ">
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
                    src="/phone.svg"
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
        </div>
      </header>
      
      <main className="flex flex-1 justify-center items-center flex-col w-full h-full">
        {children}
      </main>
    </div>
  )
}