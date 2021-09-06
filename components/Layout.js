import Head from "next/head";

import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SideMenu from "./SideMenu";
import Header from "./Header";
import profile from "../data/profile.json";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    top: "0px",
    left: "0px",

    [theme.breakpoints.down(process.env.mobileBreakPoint)]: {
      display: "none",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#212529",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#D1D5DB",
  },
  main: {
    justifyContent: "center",
    width: "calc(100vw - 5rem)",
    minHeight: "calc(100vh - 3.5rem)",
    width: "100%",
    position: "absolute",
    right: "0px",
    top: "0",
    alignItems: "center",
    paddingLeft: "5rem",

    [theme.breakpoints.down(process.env.mobileBreakPoint)]: {
      backgroundColor: theme.palette.secondary.main,
      paddingLeft: "0rem",
    },
  },
}));

export default function Layout({
  children,
  title = "Daiki Sugihara, Software Engineer in Vancouver",
}) {
  const classes = useStyles();
 
  return (
    <Box component="div" display="block" className={classes.wrapper}>
      <Head>
        <title>{title}</title>
        <meta content={profile.aboutMe} name="description" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={profile.aboutMe} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.daikisugihara.com/"} />
        <meta property="og:image" content={"/images/avator.JPG"} />
        <meta property="og:site_name" content={title} />
      </Head>

      <script> </script>

      <Grid container>
        <SideMenu />
        <Header />
      </Grid>

      <Box component="main" display="block" className={classes.main}>
        {children}
      </Box>
    </Box>
  );
}
