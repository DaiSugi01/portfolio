import { SnsIcon } from "../components/Common";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
    backgroundColor: "#E5E7EB",
    transitionDuration: "300ms",
    animation: `$slideIn 0.5s`
  },
  techStacks: {
    color: "#e31b6d",
  },
  iconStyle: {
    fontSize: 35,
  },
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: "translateY(-64px)"
    },
    '100%': { 
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

export default function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Image src={project.thumbnail} width="350" height="200" alt="skill" />
      <CardContent>

        <Typography gutterBottom variant="h5" component="h3">
          {project.appName}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
          {project.discription}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
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
          <SnsIcon
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.url}
          >
            <ArrowForwardIcon className={classes.iconStyle}/>
          </SnsIcon>
        )}
        {project.github && (
          <SnsIcon
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.github}
          >
            <GitHubIcon className={classes.iconStyle}/>
          </SnsIcon>
        )}
      </CardActions>

    </Card>
  );
}
