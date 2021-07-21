import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { SnsIcon } from "../components/Common";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "1.5rem",
    color: "#263238",
    backgroundColor: "#FFFFFF",
    transitionDuration: "300ms",
    animation: `$slideIn 0.5s`,
    boxShadow: "0 10px 25px 0 rgb(255, 255, 255, 0.4)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  text: {
    color: "#263238",
    fontSize: "1rem",
    marginTop: "1rem"
  },
  techStackWrapper: {
    maxWidth: "100%",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  techStacks: {
    backgroundColor: "#E0E2FF",
    padding: "0.5rem 1rem",
    borderRadius: "7px",
    color: "black",
    margin: "0.3rem",
    opacity: "0.9",
  },
  thumbnailWrapper: {
    maxWidth: "100%",
    justifyContent: "center",
  },
  thumbnail: {
    margin: "1rem",
  },
  iconStyle: {
    fontSize: 35,

    "&:hover": {
      color: "#c58753",
    },
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
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          className={classes.title}
        >
          {project.appName}
        </Typography>
        <Grid
          container
          item
          xs={3}
          direction="row"
          justify="center"
          className={classes.techStackWrapper}
        >
          {project.techStack &&
            project.techStack.map((tech, i) => (
              <Typography
                variant="body2"
                component="div"
                key={i}
                className={classes.techStacks}
              >
                {tech}
              </Typography>
            ))}
        </Grid>

        <Grid
          container
          item
          xs={3}
          direction="row"
          justify="center"
          className={classes.thumbnailWrapper}
        >
          {project.thumbnails &&
            project.thumbnails.map((thumbnail, i) => {
              if (project.type === "iOS") {
                return (
                  <div style={{ margin: "0 1rem 0.2rem" }}>
                    <Image
                      src={thumbnail}
                      width="180"
                      height="360"
                      alt="skill"
                      key={i}
                    />
                  </div>
                );
              } else {
                return (
                  <Image
                    src={thumbnail}
                    width="650"
                    height="360"
                    alt="skill"
                    key={i}
                  />
                );
              }
            })}
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {project.discription}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {project.contributor && "Developed with "}
          {project.contributor &&
            project.contributor.map((c, i) => (
              <>
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
              {i < project.contributor.length - 1 ? <span> and </span> : ""}
              </>
            ))}
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
          <SnsIcon
            snsItem={{ name: "github", url: project.github }}
            color="black"
          />
        )}
      </CardActions>
    </Card>
  );
}
