import Link from "next/link";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;	
  margin: auto;
  margin-top: 4rem;
`;

const ThanksMessage = styled.h1`
  margin-top: 3rem;
`;

const Message = styled.h2`
  margin-top: 1.25rem; 
  margin-bottom: 2.5rem;
`;

const AboutMe = () => {

  const styles = {
    borderRadius: "3rem",
    borderWidth: "4px",
    outline: "none",
    padding: "10px 20px",
    fontSize: "1rem;"
  }

  return (
    <div className="h-full">
      <Wrapper className="align-center text-center m-auto mt-16">
        <Image
          src="/images/contacts/mailbox.svg"
          width={250}
          height={250}
          alt="Mailbox"
        />
        <ThanksMessage className="font-bold text-4xl">Thanks, Message received!</ThanksMessage>
        <Message className="font-thin text-2xl">
          I'll be in touch with you shortly.
        </Message>
        <Link href="/">
          <Button variant="outlined" color="primary" style={{...styles}}>
            Back to home
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
