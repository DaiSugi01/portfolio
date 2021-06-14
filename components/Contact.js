import Image from "next/image";

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
    margin: "0.5rem auto 1.5rem",
    fontWeight: "400",
  },
  contactInfoWrapper: {
    marginTop: "2rem",
  },
  contactInfo: {
    marginTop: "0.5rem",
  },
  contactImage: {
    padding: "0.75rem 0.5rem",
  },
  contactText: {
    padding: "0.5rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  snsWrapper: {
    margin: "auto",

    [theme.breakpoints.up(process.env.mobileBreakPoint)]: {
      display: "none",
    },
  },
}));


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
              <SnsIcon key={snsItem.name} snsItem={snsItem} />
            ))}
        </Grid>

        <a href="tel:+1-236-888-7246" aria-label="phone">
          <Grid container direction="row" className={classes.contactInfo}>
            <Image
              className={classes.contactImage}
              src="/images/contacts/phone.svg"
              width={35}
              height={35}
              alt="phone"
            />
            <p className={classes.contactText}>+1 (236) 888 7246</p>
          </Grid>
        </a>

        <a href="mailto:volble124@gmail.com" aria-label="mail">
          <Grid container direction="row" className={classes.contactInfo}>
            <Image
              className={classes.contactImage}
              src="/images/contacts/mail.svg"
              width={25}
              height={25}
              alt="mail"
            />
            <p className={classes.contactText}>volble124@gmail.com</p>
          </Grid>
        </a>
      </Grid>
    </Wrapper>
  );
}
