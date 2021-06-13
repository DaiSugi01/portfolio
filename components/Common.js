import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

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
    },
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

export const UnderLine = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    underLine: {
      borderStyle: "solid",
      margin: "20px auto 16px",
      width: "4rem",
      borderWidth: "2px",
      borderColor: "#FFFFFF",
    },
  }));

  const classes = useStyles();

  return (
    <Box component="div" display="block" className={classes.underLine}>
      {children}
    </Box>
  );
};

export const SnsIcon = ({ children }) => {
  const useStyles = makeStyles(() => ({
    snsIcon: {
      cursor: "pointer",

      "&:hover": {
        color: "#c58753",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Typography
      gutterBottom
      variant="h5"
      component="a"
      className={classes.snsIcon}
    >
      {children}
    </Typography>
  );
};
