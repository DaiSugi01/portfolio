import Image from "next/image";

import styled from "styled-components";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import { SnsIcon } from "../components/Common";
import ContactForm from "../components/ContactForm";
import { UnderLine, Wrapper } from "../components/Common";
import profile from "../data/profile.json";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    lineHeight: 1,
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    textAlign: "center",
    margin: "2rem auto 3rem",
    fontWeight: "400",
  },
  contactInfoWrapper: {
    marginTop: "2rem",
  },
  snsWrapper: {
    margin: "auto",

    [theme.breakpoints.up(process.env.mobileBreakPoint)]: {
      display: "none",
    },
  },
  icon: {
    fontSize: 40,
  },
}));

const ContactInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export default function Contact() {
  const classes = useStyles();

  return (
    <Wrapper id="contact" bgColor={process.env.bgSub} ptm="2.5rem">
      <Typography variant="h5" component="h2" className={classes.title}>
        Contact
      </Typography>
      <UnderLine />

      <Typography variant="h5" component="p" className={classes.text}>
        Thanks for taking your time to reach me out!
      </Typography>

      <div className="contact-form">
        <ContactForm />
      </div>

      <Grid
        container
        item
        xs={12}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.contactInfoWrapper}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.snsWrapper}
        >
          {profile.sns &&
            profile.sns.map((snsItem) => (
              <SnsIcon
                key={snsItem.url}
                href={snsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={snsItem.name}
                className={classes.snsWrapper}
                snsType={snsItem.name}
              />
            ))}
        </Grid>

        <a href="tel:+1-236-888-7246" aria-label="phone">
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
        </a>

        <a href="mailto:volble124@gmail.com" aria-label="mail">
          <ContactInfo>
            <Image
              className="px-3 py-2"
              src="/images/contacts/mail.svg"
              width={25}
              height={25}
              alt="mail"
            />
            <p className="px-2 py-2 text-xl">volble124@gmail.com</p>
          </ContactInfo>
        </a>
      </Grid>
    </Wrapper>
  );
}
