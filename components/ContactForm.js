import fetch from "node-fetch";
import { useState } from "react";
import Router from "next/router";

import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Box } from "@material-ui/core";

import { baseUrl } from "../lib/commonInfo";
import CircularIndeterminate from "../components/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    [theme.breakpoints.down(process.env.mobileBreakPoint)]: {
      display: "none",
    }
  },
  stylesForGrid: {
    width: "500px",
    backgroundColor: "#E5E7EB",
    marginBottom: "0.1rem",
    maxWidth: "100%",
    borderColor: "#E5E7EB",
  },
  submit: {
    fontSize: "1.4rem",
    color: "#D1D5DB",
    border: "0.1rem solid #D1D5DB",
    padding: "0.8rem 4rem",
    borderRadius: "3rem",
    marginTop: "2rem",
    fontWeight: "200",
    fontFamily: "monospace",
    
    "&focus": {
      outline: "none"
    }
  },
}));

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const classes = useStyles();

  let submit = (
    <Button type="submit" variant="outlined" className={classes.submit}>
      Submit
    </Button>
  );

  if (isLoading) {
    submit = <CircularIndeterminate />;
  }

  const submitForm = (e) => {
    e.preventDefault();

    const email = e.target.MailAddress.value;
    const content = e.target.Contact.value;

    if (!formValidation(email)) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);
    fetch(new URL(baseUrl + "/sendemail"), {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response issue");
        }
        Router.push("/message-success");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("Error: " + err);
      });
  };

  const formValidation = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Grid container alignItems="center" justify="center" className={classes.formWrapper}>
      <form id="ContactForm" action="" onSubmit={submitForm}>
        <Grid
          className="gridItems"
          item
          md={12}
          className={classes.stylesForGrid}
        >
          <TextField
            required
            fullWidth
            id="MailAddress"
            label="Email address"
            variant="filled"
            color="secondary"
          />
        </Grid>
        <Grid
          className="gridItems"
          item
          md={12}
          className={classes.stylesForGrid}
        >
          <TextField
            required
            fullWidth
            rows={15}
            multiline
            id="Contact"
            label="Your message"
            variant="filled"
            color="secondary"
          />
        </Grid>

        {isError ? (
          <p className="text-center text-red-500 font-bold">
            Oops! Something went wrong. <br />
            Please check your email address is correct and your message field is
            filled.
            <br />
            Then try again.
          </p>
        ) : (
          ""
        )}
        {submit}
      </form>
    </Grid>
  );
}
