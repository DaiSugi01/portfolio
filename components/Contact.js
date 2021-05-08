import Image from "next/image";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { SnsIcon } from "../components/Common";

import ContactForm from "../components/ContactForm";
import { UnderLine } from "../components/Common";

const styles = {
  fontSize: 40,
};

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

const SnsWrapper = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  
  @media (min-width: 799px) {
    display: none;
  }
`;

export default function Contact() {
  return (
    <Wrapper className="bg-sub-main">
      <Title>Contact</Title>
      <UnderLine />
      <Text>Thanks for taking your time to reach me out!</Text>
      <div className="contact-form">
        <ContactForm />
      </div>

      <ContactInfoWrapper>
        <SnsWrapper>
          <SnsIcon
            href="https://github.com/DaiSugi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 px-3 py-2 rounded"
          >
            <GitHubIcon style={{ ...styles }} />
          </SnsIcon>

          <SnsIcon
            href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-white text-gray-300 px-3 py-2 rounded"
          >
            <LinkedInIcon style={{ ...styles }} />
          </SnsIcon>
        </SnsWrapper>

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
