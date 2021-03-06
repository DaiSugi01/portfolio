import { Box, Grid, makeStyles } from "@material-ui/core";

import Cards from "./Cards";
import profile from "../data/profile.json";
import { Wrapper } from "../components/Common";

const useStyles = makeStyles((theme) => ({
  greet: {
    fontWeight: "700",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    textAlign: "center",
    padding: "0 1rem",

    [theme.breakpoints.down(process.env.mobileHeader)]: {
      fontSize: "2rem"
    },

  },
  profile: {
    marginTop: "2.5rem",
    width: "58.333333%",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",

    [theme.breakpoints.down(process.env.mobileHeader)]: {
      width: "90%",
      fontSize: "1.1rem"
    },
  },
  skillCards: {
    margin: "auto",
    marginTop: "3rem",
  }
}));

export default function AboutMe({ programming }) {
  const classes = useStyles();

  return (
    <Wrapper id="about" bgColor={process.env.bgSub} ptm="2.5rem">
      <Box component="h1" className={classes.greet}>
        {profile.greet}
      </Box>

      <Box component="h2" className={classes.profile}>
        {profile.aboutMe}
      </Box>

      <Grid
        container
        item
        xs={12} 
        direction="row"
        justify="center"
        className={classes.skillCards}
      >
        {programming &&
          programming.map((skill) => <Cards key={skill.id} content={skill} />)}
      </Grid>

    </Wrapper>
  );
}
