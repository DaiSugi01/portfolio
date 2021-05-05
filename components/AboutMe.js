import styled from 'styled-components';

import Card from "../components/Card";
import profile from "../data/profile.json";

const Greet = styled.h1`
  margin-top: 4rem;
`;

const Profile = styled.h2`
  margin: auto;
  margin-top: 2.5rem;
  width: 58.333333%;
`;

const SkillCards = styled.h2`
  margin: auto;
  margin-top: 6rem;
  width: 93%;
`;

export default function AboutMe({ programming, others }) {

  return (
    <section className="h-full w-full bg-sub-main pb-20">
      <Greet className="font-bold text-4xl text-center">{profile.greet}</Greet>
      <Profile className="text-center text-xl">{profile.aboutMe}</Profile>

      <SkillCards className="flex">
        {programming && programming.map(skill => <Card key={skill.id} content={skill}/>)}
      </SkillCards>

    </section>
  );
}
