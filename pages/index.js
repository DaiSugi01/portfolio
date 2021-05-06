import Layout from "../components/Layout";
import Top from "../components/Top";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
import { getAllSkills } from "../lib/getSkills";
import { getAllProjects } from "../lib/getProjects";

export default function Home({ programming, projects }) {
  return (
    <Layout title="Home">
      <Top />
      <AboutMe programming={programming} />
      <Project projects={projects} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const skills = await getAllSkills();
  const programming = skills.filter((skill) => skill.type == "programming");

  const projects = await getAllProjects();
  return {
    props: { programming, projects },
  };
}
