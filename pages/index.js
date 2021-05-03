import Link from "next/link";

import Layout from "../components/Layout";
import Top from "../components/Top";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import { getAllSkills } from "../lib/getSkills";

export default function Home({ programming, others }) {

  return (
    <Layout title="Home">
      <Top />
      <AboutMe programming={programming} others={others}/>
      <Project />

      <div className="h-screen w-full bg-sub-main">
        <Link href="/about-me">
          <div className="h-main w-full">
          <a className="text-4xl cursor-pointer relative top-1/2 text-center">
              <p className="text-4xl">Daiki Sugihara</p>
              <p className="text-sm">iOS developer / Backend developer</p>
            </a>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const skills = await getAllSkills();
  const programming = skills.filter( skill => skill.type == "programming")
  const others = skills.filter( skill => skill.type == "other")

  return {
    props: { programming, others }
  };
}
