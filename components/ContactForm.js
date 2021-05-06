import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const stylesForGrid = {
  width: "500px",
  backgroundColor: "#1E242C",
  marginBottom: "0.1rem",
  color: "white"
};

const stylesForSubmit = {
  borderRadius: "3rem",
  borderWidth: "2px",
  outline: "none",
  padding: "10px 40px",
  borderColor: "white",
  color: "white"
};

export default function ContactForm() {
  return (
    <Grid container alignItems="center" justify="center">
      <form id="ContactForm" action="">
        <Grid className="gridItems" item md={12} style={{ ...stylesForGrid }}>
          <TextField
            required
            fullWidth
            id="Username"
            label="Name"
            variant="outlined"
            color="secondary"
          />
        </Grid>
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
            label="Your message here"
            variant="outlined"
          />
        </Grid>

        <div className="align-cnter text-center m-auto mt-5">
          <Button
            variant="outlined"
            color="primary"
            style={{ ...stylesForSubmit }}
          >
            <span className="text-xl">Submit</span>
          </Button>
        </div>
      </form>
    </Grid>
  );
}
