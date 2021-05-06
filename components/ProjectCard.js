import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const TechStacks = styled.span`
  color: #e31b6d;
`;

const contributor = styled.a`

`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({ project }) {
  const classes = useStyles();

  const styles = {
    width: "350px",
    margin: "5px",
  };

  return (
    <Card className={classes.root} style={{ ...styles }}>
      <CardMedia
        className={classes.media}
        image={project.thumbnail}
        title={project.appName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.appName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.discription}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
          {project.contributor && "Developed with "}
          {project.contributor &&
            project.contributor.map((c) => (
              <a 
              key={c.id}
              href={c.url}
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"    
              >
                {c.name}
              </a>
            ))}
        </Typography>
        <Typography variant="body4" color="textSecondary" component="p">
          <TechStacks>
            {project.techStack &&
              project.techStack.map((tech, i) => {
                if (i === project.techStack.length - 1) {
                  return tech;
                } else {
                  return tech + ", ";
                }
              })}
          </TechStacks>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
