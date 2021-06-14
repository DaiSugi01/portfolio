import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  const useStyles = makeStyles(() => ({
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

export const SnsIcon = ({ snsItem, color="#D1D5DB" }) => {
  const useStyles = makeStyles(() => ({
    snsIconWrapper: {
      cursor: "pointer",
      marginBottom: "1rem",
      color: `${color}`,
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddinBottom: "0.5rem",
      borderRadius: "0.25rem",

      "&:hover": {
        color: "#c58753",
      },
    },
    icon: {
      fontSize: "45px",
    },
  }));

  const classes = useStyles();

  return (
    <Typography
      gutterBottom
      variant="h5"
      component="a"
      className={classes.snsIconWrapper}
      href={snsItem.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={snsItem.name}
      alt={snsItem.name}
    >
      {snsItem.name === "github" ? (
        <GitHubIcon className={classes.icon} />
      ) : (
        <LinkedInIcon className={classes.icon} />
      )}
    </Typography>
  );
};
