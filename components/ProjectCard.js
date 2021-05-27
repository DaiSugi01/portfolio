import styled from "styled-components";
import { SnsIcon } from "../components/Common";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image from "next/image";

const TechStacks = styled.span`
  color: #e31b6d;
`;

const iconStyles = {
  fontSize: 35
};

const styles = {
  width: "350px",
  margin: "5px",
  backgroundColor: "#E5E7EB",
};

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

  return (
    <Card className={classes.root} style={{ ...styles }}>
      <Image src={project.thumbnail} width="350" height="200" alt="skill" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
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
                aria-label="contributor"
              >
                {c.name}
              </a>
            ))}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
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
        {project.url && (
          <SnsIcon href={project.url} target="_blank" rel="noopener noreferrer">
            <ArrowForwardIcon style={{...iconStyles}}/>
          </SnsIcon>
        )}
        {project.github && (
          <SnsIcon href={project.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon  style={{...iconStyles}}/>
          </SnsIcon>
        )}
      </CardActions>
    </Card>
  );
}
