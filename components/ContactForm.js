import React, { Component } from "react";
import { TextField, Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function ContactForm() {
  const styles = {
    width: "500px",
    backgroundColor: "#FFFFFF",
    // borderRadius: "0.25rem",
    marginBottom: "0.1rem"
  }
  return (
      <Grid container alignItems="center" justify="center">
        <form id="ContactForm" action="">
          <Grid className="gridItems" item md={12} style={{...styles}}>
            <TextField
              required
              fullWidth
              id="Username"
              label="Name"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid className="gridItems" item md={12} style={{...styles}}>
            <TextField
              required
              fullWidth
              id="MailAddress"
              label="Email address"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid className="gridItems" item md={12} style={{...styles}}>
            <TextField
              required
              fullWidth
              rows={15}
              multiline
              id="Contact"
              label="Your message here"
              variant="outlined"
            />
          </Grid>
          <Grid id="SubmitButtonGrid" className="gridItems" item md={12}>
            <Input id="SubmitButton" type="submit" variant="outlined" />
          </Grid>
        </form>
      </Grid>
  );
}
