import { Box, Grid, makeStyles } from "@material-ui/core";

import { SnsIcon } from "../components/Common";
import profile from "../data/profile.json";

const useStyles = makeStyles((theme) => ({
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
      display: "none",
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
    fontWeight: "700",
    color: "#3e2723",
  },
  snsWrapper: {
    marginBottom: "1rem",
  },
  icon: {
    fontSize: 45,
  },
}));

export default function SideMenu() {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.sideMenu}>
      <Box component="div" className={classes.logo}>
        DS
      </Box>
      <Grid container direction="column" justify="center" alignItems="center">
        {profile.sns &&
          profile.sns.map((snsItem) => (
            <SnsIcon
              key={snsItem.name}
              className={classes.snsWrapper}
              snsItem={snsItem}
            />
          ))}
      </Grid>
    </Box>
  );
}
