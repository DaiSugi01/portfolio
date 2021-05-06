import styled from 'styled-components';

import Card from "../components/Card";
import profile from "../data/profile.json";

const Wrapper = styled.section`
  padding: 2.5rem 0;
`

const Greet = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
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
  margin-top: 3rem;
  width: 93%;
  flex-wrap: wrap;
`;

export default function AboutMe({ programming }) {

  return (
    <Wrapper className="bg-sub-main">
      <Greet>{profile.greet}</Greet>
      <Profile>{profile.aboutMe}</Profile>

      <SkillCards className="flex">
        {programming && programming.map(skill => <Card key={skill.id} content={skill}/>)}
      </SkillCards>

    </Wrapper>
  );
}
