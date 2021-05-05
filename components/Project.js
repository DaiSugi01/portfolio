import { useState } from "react";
import styled from 'styled-components';

import Filter from "../components/Filter";

const projectSec = styled.section `

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
        <p className="text-5xl text-center mt-16">Projects</p>
        <div className="mx-auto mt-4 mb-16 border-solid w-16 border-white border-2"></div>

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
