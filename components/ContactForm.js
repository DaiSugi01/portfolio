import { useState } from "react";
import Router from "next/router";
import { TextField, Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import fetch from "node-fetch";

import { baseUrl } from "../lib/commonInfo";
import CircularIndeterminate from "../components/CircularProgress";

const stylesForGrid = {
  width: "500px",
  backgroundColor: "#E5E7EB",
  marginBottom: "0.1rem",
};

const stylesForSubmit = {
  outline: "none",
  padding: "5px 30px",
  color: "white",
  fontSize: "1.3rem",
  display: "inline-block",
};

const SubmitWrapper = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
`;

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  let submit = (
    <SubmitWrapper>
      <Input type="submit" value="Submit" style={{ ...stylesForSubmit }} />
    </SubmitWrapper>
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
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
      console.log("format error");
      return false;
    } else {
      return true;
    }
  };

  return (
    <Grid container alignItems="center" justify="center">
      <form id="ContactForm" action="" onSubmit={submitForm}>
        <Grid className="gridItems" item md={12} style={{ ...stylesForGrid }}>
          <TextField
            required
            fullWidth
            id="MailAddress"
            label="Email address"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid className="gridItems" item md={12} style={{ ...stylesForGrid }}>
          <TextField
            required
            fullWidth
            rows={15}
            multiline
            id="Contact"
            label="Your message"
            variant="outlined"
            color="secondary"
          />
        </Grid>

        {isError ? (
          <p className="text-center text-red-500 font-bold">
            Oops! Something went wrong. Plase try again
          </p>
        ) : (
          ""
        )}
        {submit}
      </form>
    </Grid>
  );
}
