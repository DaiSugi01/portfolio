import Head from "next/head";
import styled from "styled-components";

import profile from "../data/profile.json"

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10;
  height: 3.5rem;
  width: calc(100vw - 5rem);
  padding-right: 2rem;
  margin-top: 1rem;

  @media (max-width: 799px) {
    .header {
      display: none;
    }
  }
`;
export default function Header({ title }) {
  const scrollToTarget = (x, y) => {
    if (x > 0) {
      let elHeight = document.getElementsByTagName("main")[0].clientHeight;
      y = elHeight - 790;
    }

    window.scrollTo(x, y);
  };

  return (
    <Head>
      <title>{title}</title>
      <meta content={profile.aboutMe} name="description" />
      <meta charset="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={profile.aboutMe} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://www.daikisugihara.com/"} />
      <meta property="og:image" content={"/images/avator.JPG"} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={"/images/avator.JPG"} />

      <Navigation>
        <div className="header">
          <div className="flex space-x-4 text-lg">
            <p
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              onClick={() => scrollToTarget(0, 0)}
            >
              Home
            </p>

            <p
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              onClick={() => scrollToTarget(0, 760)}
            >
              About
            </p>

            <p
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              onClick={() => scrollToTarget(0, 2040)}
            >
              Projects
            </p>

            <p
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              onClick={() => scrollToTarget(1, 1)}
            >
              Contact
            </p>
          </div>
        </div>
      </Navigation>
    </Head>
  );
}
