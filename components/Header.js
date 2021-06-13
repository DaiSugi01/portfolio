import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from 'react-scroll';

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    fontSize: "1.2rem",
    paddingRight: "2rem",
    marginTop: "1rem",
    position: "fixed",
    top: "0px",
    right: "0px",
    zIndex: "10",
    height: "3.5rem",
    width: "calc(100vw - 5rem)",
  },
  ul: {
    display: "flex",
    marginRight: "calc(1rem * var(--tw-space-x-reverse))",
    marginLeft: " calc(1rem * calc(1 - var(--tw-space-x-reverse)))",
    color: "#D1D5DB",
  },
  li: {
    paddingLeft: " 0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    borderRadius: "0.25rem",
    cursor: "pointer",

    "&:hover": {
      background: "#374051",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <Box component="nav" className={classes.nav}>
      <ul className={classes.ul}>
        {navItems.map((item) => (
          <li key={item} className={classes.li}>
            <Link
              activeClass="active"
              to={item.toLowerCase()}
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}
