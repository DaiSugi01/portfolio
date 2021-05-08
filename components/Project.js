import { useState } from "react";
import styled from "styled-components";

import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import { Wrapper, UnderLine } from "../components/Common";

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1;
  text-align: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  const [filteredProjects, setProjects] = useState([...projects]);
  const filters = ["All", "Web", "iOS"];

  const onChangeActive = (active) => {
    if (activeIndex === active) {
      return;
    }

    setActiveIndex(active);
    if (filters[active] !== "All") {
      const newProjects = projects.filter((p) => p.type === filters[active]);
      setProjects([...newProjects]);
    } else {
      setProjects([...projects]);
    }
  };

  return (
    <Wrapper className="bg-main">
      <div>
        <Title>Projects</Title>
        <UnderLine></UnderLine>

        {/* <div className="flex justify-center text-gray-300 items-center "> */}
        <FilterWrapper>
          {filters.map((buttonName, i) => (
            <Filter
              key={i}
              text={buttonName}
              onActive={() => onChangeActive(i)}
              active={i === activeIndex}
            />
          ))}
        </FilterWrapper>
        <CardWrapper>
          {filteredProjects &&
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardWrapper>
      </div>
    </Wrapper>
  );
}
