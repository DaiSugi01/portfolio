import { Box, makeStyles } from "@material-ui/core";


export default function Filter({ text, onActive, active }) {
  const useStyles = makeStyles((theme) => ({
    filterButton: {
      backgroundColor: active ? "#E31C6E" : "none",
      transitionDuration: "300ms",
      margin: "2.5rem 0 0",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      width: "10rem",
      cursor: "pointer",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      textAlign: "center",

      [theme.breakpoints.down(process.env.mobileHeader)]: {
        width: "6rem"
      }
    }
  }));

  const classes = useStyles();

  return (
    <Box className={classes.filterButton} onClick={onActive}>
      {text}
    </Box>
  );
}
