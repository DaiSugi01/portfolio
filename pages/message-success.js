import Link from "next/link";
import Image from "next/image";

import { Button, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "100vh",
    width: "100vw"
  },
  thanks: {
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    margin: "3rem auto 0"
  },
  resText: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 100,
    margin: "1.25rem auto 2.5rem"
  },
  backButton: {
    borderRadius: "3rem",
    borderWidth: "4px",
    outline: "none",
    padding: "10px 20px",
    fontSize: "1rem"
  },
}));

const MessageSuccess = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.wrapper}>
        <Image
          src="/images/contacts/mailbox.svg"
          width={250}
          height={250}
          alt="Mailbox"
        />

        <Typography variant="h5" component="h2" className={classes.thanks}>
          Thanks, Message received!
        </Typography>

        <Typography variant="h5" component="h3" className={classes.resText}>
          I'll be in touch with you shortly.
        </Typography>

        <Link href="/">
          <Button
            variant="outlined"
            color="primary"
            className={classes.backButton}
          >
            Back to home
          </Button>
        </Link>
      </Box>
  );
};

export default MessageSuccess;
