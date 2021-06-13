import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Box, makeStyles } from "@material-ui/core";

import { Wrapper } from "./Common";

const useStyles = makeStyles((theme) => ({
  myName: {
    fontSize: "3rem",
    lineHeight: "3rem",
  },
  jobTitle: {
    fontSize: "1.1rem",
    lineHeight: "1.8rem",
  },
  arrow: {
    fill: "white",
    fontSize: "3rem",
    transform: "rotate(90deg)"
  }
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
          iOS developer / Backend developer
        </Box>
      </Box>

      <Box component="div" display="block">
        <DoubleArrowIcon className={classes.arrow}/>
      </Box>
    </Wrapper>
  );
}
