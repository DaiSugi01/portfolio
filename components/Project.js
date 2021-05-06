import { useState } from "react";
import styled from "styled-components";

import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  padding: 2.5rem 0;
`

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1;
  text-align: center;
`;

const UnderLine = styled.div`
  border-style: solid;
  margin: 20px auto 16px;
  width: 4rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(255, 255, 255, var(--tw-border-opacity));
`;

const CardWrapper = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Project({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredProjects, setProjects] = useState([...projects])
  const filters = ["All", "Web", "iOS"];

  const onChangeActive = (active) => {
    setActiveIndex(active);
    if (filters[active] !== 'All') {
      console.log("not all")
      const newProjects = projects.filter(p => p.type === filters[active])
      console.log(newProjects)
      setProjects(newProjects)
    } else {
      console.log("all")
      setProjects([...projects])
    }
    console.log(projects)
    console.log(filteredProjects)
    setProjects();
  };

  return (
    <Wrapper className="bg-main">
      <div>
        <Title>Projects</Title>
        <UnderLine></UnderLine>

        <div className="flex justify-center text-gray-300 items-center w-full">
          {filters.map((buttonName, i) => (
            <Filter
              key={i}
              text={buttonName}
              onActive={() => onChangeActive(i)}
              active={i === activeIndex}
            />
          ))}
        </div>

        <CardWrapper>
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardWrapper>
      </div>
    </Wrapper>
  );
}
