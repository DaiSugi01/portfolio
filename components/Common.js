import { Box, Grid, makeStyles } from "@material-ui/core";

export const Wrapper = ({ id, bgColor, ptm = 0, children }) => {
  const useStyles = makeStyles(() => ({
    wrapper: {
      minHeight: `${id === "home" ? "100vh" : 0}`,
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: `${bgColor}`,
      padding: `${ptm} 0`,
    }
  }));

  const classes = useStyles();

  return (
    <Box component="section" display="block">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapper}
        id={id}
      >
        {children}
      </Grid>
    </Box>
  );
};

import styled from "styled-components";

export const UnderLine = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    underLine: {
      borderStyle: "solid",
      margin: "20px auto 16px",
      width: "4rem",
      borderWidth: "2px",
      borderColor: "#FFFFFF"
    }
  }));

  const classes = useStyles();

  return (
    <Box component="div" display="block" className={classes.underLine}>
      {children}
    </Box>
  );
};
// export const UnderLine = styled.div`
//   border-style: solid;
//   margin: 20px auto 16px;
//   width: 4rem;
//   border-width: 2px;
//   --tw-border-opacity: 1;
//   border-color: rgba(255, 255, 255, var(--tw-border-opacity));
// `;

// export const Wrapper = styled.section`
//   height: 100%;
//   width: 100%;
//   padding: 2.5rem 0;
// `;

export const SnsIcon = styled.a`
  &:hover {
    color: #c58753;
  }
`;
