import styled from 'styled-components';

import Card from "../components/Card";
import profile from "../data/profile.json";

const Greet = styled.h1`
  margin-top: 4rem;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const Profile = styled.h2`
  margin: auto;
  margin-top: 2.5rem;
  width: 58.333333%;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
`;

const SkillCards = styled.h2`
  margin: auto;
  margin-top: 6rem;
  width: 93%;
`;

export default function AboutMe({ programming }) {

  return (
    <section className="h-full w-full bg-sub-main pb-20">
      <Greet>{profile.greet}</Greet>
      <Profile>{profile.aboutMe}</Profile>

      <SkillCards className="flex">
        {programming && programming.map(skill => <Card key={skill.id} content={skill}/>)}
      </SkillCards>

    </section>
  );
}
