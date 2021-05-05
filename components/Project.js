import { useState } from "react";
import styled from 'styled-components';

import Filter from "../components/Filter";

const Title = styled.h2 `
  margin-top: 4rem;
  font-size: 3rem;
  line-height: 1;
  text-align: center;
`

const UnderLine = styled.div`
  border-style: solid;
  margin: 20px auto 16px;
  width: 4rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(255, 255, 255, var(--tw-border-opacity));	
`

export default function Project() {
  const [activeIndex, setActive] = useState(0);
  const filters = ['All', 'Web', 'iOS']

  const onChangeActive = active => {
    setActive(active);
  };
  
  return (
    <section className="h-screen w-full">
      <div className="h-main w-full">
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
      </div>
    </section>
  );
}
