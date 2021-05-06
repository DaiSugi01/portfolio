import styled from 'styled-components';

import ContactForm from '../components/ContactForm';

const Wrapper = styled.section`
  padding: 2.5rem 0;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1;
  text-align: center;
  margin-bottom: 3rem;
`;

export default function Contact() {
  return (
    <Wrapper className="bg-sub-main">
      <Title>Contact</Title>
      <ContactForm />
    </Wrapper>
  )
}
