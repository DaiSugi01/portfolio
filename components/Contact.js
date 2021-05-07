import styled from "styled-components";

import ContactForm from "../components/ContactForm";
import { Wrapper, UnderLine } from "../components/Common";

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin: 2rem auto 3rem;
  font-weight: 400;
`;

export default function Contact() {
  return (
    <Wrapper className="bg-sub-main">
      <Title>Contact</Title>
      <UnderLine />
      <Text>Thanks for taking your time to reach me out!</Text>
      <ContactForm />
    </Wrapper>
  );
}
