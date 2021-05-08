import { TextField, Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import { getAllPostsData } from "../lib/posts";

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
  display: "inline-block"
};

const SubmitWrapper = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
`;

export default function ContactForm() {

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e)
    let res = await getAllPostsData().then(
      console.log("OK")
    ).catch(
      
    )
    console.log(res);
  }

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

        <SubmitWrapper>
          <Input
            type='submit'
            value='Submit'
            style={{ ...stylesForSubmit }}
          />
        </SubmitWrapper>
      </form>
    </Grid>
  );
}
