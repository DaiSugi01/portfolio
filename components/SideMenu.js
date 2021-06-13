import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SnsIcon } from "../components/Common";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "0px",
    minHeight: "100vh",
    width: "5rem",
    zIndex: "20",
    justifyContent: "space-between",
    backgroundColor: "#1F2937",
    paddingBottom: "1.5rem",

    [theme.breakpoints.down(process.env.mobileBreakPoint)]: {
      display: "none"
    },
  },
  logo: {
    height: "6rem",
    backgroundColor: "#c58753",
    fontFamily: "Great Vibes",
    textAlign: "center",
    alignItems: "center",
    fontSize: "1.8rem",
    lineHeight: "6rem",
    fontWeight: "700"
  },
  snsWrapper: {
    marginBottom: "1rem"
  }
}));

const styles = {
  fontSize: 45,
};

const SnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export default function SideMenu() {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.sideMenu}>
      <Box component="div" className={classes.logo}>
        DS
      </Box>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <SnsIcon
          href="https://github.com/DaiSugi01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 px-3 py-2 rounded"
          aria-label="sns"
          className={classes.snsWrapper}
          >
          <GitHubIcon style={{ ...styles }} />
        </SnsIcon>

        <SnsIcon
          href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-white text-gray-300 px-3 py-2 rounded"
          aria-label="sns"
        >
          <LinkedInIcon style={{ ...styles }} />
        </SnsIcon>
      </Grid>
      </Box>
  );
}
