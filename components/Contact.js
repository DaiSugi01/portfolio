import styled from "styled-components";
import Image from "next/image";

import ContactForm from "../components/ContactForm";
import { UnderLine } from "../components/Common";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  padding: 2.5rem 0;
  @media (max-width: 799px) {
    .contact-form {
      display: none;
    }
  }
`;

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

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export default function Contact() {
  return (
    <Wrapper className="bg-sub-main">
      <Title>Contact</Title>
      <UnderLine />
      <div className="contact-form">
        <Text>Thanks for taking your time to reach me out!</Text>
        <ContactForm/>
      </div>

      <ContactInfoWrapper>
        <ContactInfo>
          <Image
            className="px-3 py-2"
            src="/images/contacts/phone.svg"
            width={35}
            height={35}
            alt="phone"
          />
          <p className="px-2 py-2 text-xl">+1 (236) 888 7246</p>
        </ContactInfo>

        <a href="tel:volble124@gmail.com">
          <ContactInfo>
            <Image
              className="px-3 py-2"
              src="/images/contacts/mail.svg"
              width={25}
              height={25}
              alt="main"
            />
            <p className="px-2 py-2 text-xl">volble124@gmail.com</p>
          </ContactInfo>
        </a>
      </ContactInfoWrapper>
    </Wrapper>
  );
}
