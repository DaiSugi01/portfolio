import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Box, makeStyles } from "@material-ui/core";

import { Wrapper } from "./Common";

const useStyles = makeStyles((theme) => ({
  myName: {
    fontSize: "3rem",
    lineHeight: "3rem",

    [theme.breakpoints.down(process.env.mobileHeader)]: {
      fontSize: "2rem",
    },
  },
  jobTitle: {
    fontSize: "1.1rem",
    lineHeight: "1.8rem",
  },
  box: {
    marginTop: "0.5rem",
    animation: `$spin infinite 1.2s`,
  },
  arrow: {
    fill: "white",
    fontSize: "3rem",
    transform: "rotate(90deg)",
  },
  "@keyframes spin": {
    "0%": { transform: "translateY(0px)" },
    "100%": { transform: "translateY(10px)" },
  },
}));

export default function Top() {
  const classes = useStyles();

  return (
    <Wrapper id="home" bgColor={process.env.bgMain}>
      <Box component="div" display="block">
        <Box component="p" display="block" className={classes.myName}>
          Daiki Sugihara
        </Box>
        <Box component="p" display="block" className={classes.jobTitle}>
          Backend developer
        </Box>
      </Box>

      <Box component="div" display="block" className={classes.box}>
        <DoubleArrowIcon className={classes.arrow} />
      </Box>
    </Wrapper>
  );
}
