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
