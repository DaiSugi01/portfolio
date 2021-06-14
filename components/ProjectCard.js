import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { SnsIcon } from "../components/Common";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
    color: "#263238",
    backgroundColor: "#E5E7EB",
    transitionDuration: "300ms",
    animation: `$slideIn 0.5s`,
  },
  title: {
    fontSize: "1.5rem"
  },
  text: {
    color: "#263238",
    fontSize: "1rem"
  },
  techStacks: {
    color: "#b71c1c"
  },
  iconStyle: {
    fontSize: 35,

    "&:hover": {
      color: "#c58753",
    }
  },
  "@keyframes slideIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-64px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

export default function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Image src={project.thumbnail} width="350" height="200" alt="skill" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" className={classes.title}>
          {project.appName}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          {project.discription}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          {project.contributor && "Developed with "}
          {project.contributor &&
            project.contributor.map((c) => (
              <a
                key={c.name}
                href={c.url}
                className="underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.url}
              >
                {c.name}
              </a>
            ))}
        </Typography>

        <Typography
          variant="body2"
          component="span"
          className={classes.techStacks}
        >
          {project.techStack &&
            project.techStack.map((tech, i) => {
              if (i === project.techStack.length - 1) {
                return tech;
              } else {
                return tech + ", ";
              }
            })}
        </Typography>
      </CardContent>

      <CardActions className={classes.snsWrapper}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.url}
          >
            <ArrowForwardIcon className={classes.iconStyle} />
          </a>
        )}
        {project.github && (
          <SnsIcon snsItem={{ name: "github", url: project.github }} color="black" />
        )}
      </CardActions>
    </Card>
  );
}
