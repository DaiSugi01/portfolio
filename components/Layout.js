import Head from "next/head";

import Header from "./SideMenu";
import SideMenu from "./Header";

export default function Layout({ children, title = "Daiki Sugihara" }) {
  return (
    <div className="flex justify-center items-center flex-col h-400vh text-sm font-momo bg-main text-gray-300">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="flex w-screen top-0 left-0 absolute">
          <Header />
          <SideMenu />
        </div>
      </header>

      <main className="flex flex-1 justify-center items-center flex-col w-main min-h-main absolute right-0 top-10">
        {children}
      </main>
    </div>
  );
}
