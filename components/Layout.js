import Head from "next/head";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./SideMenu";
import SideMenu from "./Header";
import profile from "../data/profile.json";

const useStyles = makeStyles((theme) => ({
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
    top: "2.5rem",
    alignItems: "center",
    paddingLeft: "5rem",

    [theme.breakpoints.down(process.env.mobileBreakPoint)]: {
      backgroundColor: theme.palette.secondary.main,
      paddingLeft: "0rem"
    },
  },
}));

const CustomHeader = styled.header`
  @media (max-width: 799px) {
    .nav {
      display: none;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const CustomMain = styled.main`
  <main className="right-0 top-10">
  display: flex;
  flex-direction: colmn;
  justify-content: center;
  width: calc(100vw - 5rem);
  min-height: calc(100vh - 3.5rem);
  width: 100%;
  position: absolute;
  right: 0px;
  top: 2.5rem;
  align-items: center;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

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

      <CustomHeader>
        <Nav className="nav">
          <Header />
          <SideMenu />
        </Nav>
      </CustomHeader>

      <Box component="main" display="block" className={classes.main}>
        {children}
      </Box>
    </Box>
  );
}
