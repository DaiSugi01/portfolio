import { useState } from "react";
import { Box, Card, Grid, makeStyles } from "@material-ui/core";

import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import { Wrapper, UnderLine } from "../components/Common";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "3rem",
    lineHeight: 1,
    textAlign: "center",
  },
  filterWrapper: {
    marginBottom: "2rem",
  },
  card: {
    backgroundColor: "#212529",
    height: "50vw",
    minHeight: "400px",
    width: "90%",
    color: "#69696a",
    marginBottom: "2.22vw",
    overflow: "scroll",
    padding: "2.22vw",
    fontSize: "1.4vw",
  },
  skillCards: {
    maxWidth: "95%",
    margin: "auto"
  }
}));

export default function Project({ projects }) {
  const classes = useStyles();

  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredProjects, setProjects] = useState([...projects]);
  const filters = ["All", "Web", "iOS"];

  const onChangeActive = (active) => {
    if (activeIndex === active) {
      return;
    }

    setActiveIndex(active);
    if (filters[active] !== "All") {
      const newProjects = projects.filter((p) => p.type === filters[active]);
      setProjects([...newProjects]);
    } else {
      setProjects([...projects]);
    }
  };

  return (
    <Wrapper id="projects" bgColor={process.env.bgMain} ptm="2.5rem">
      <Box component="h2" className={classes.title}>
        Projects
      </Box>
      <UnderLine />

      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        className={classes.filterWrapper}
      >
        {filters.map((buttonName, i) => (
          <Filter
            key={i}
            text={buttonName}
            onActive={() => onChangeActive(i)}
            active={i === activeIndex}
          />
        ))}
      </Grid>

      <Card className={classes.card}>

      <Grid
        container
        item
        xs={8}
        direction="column"
        justify="center"
        className={classes.skillCards}
      >
        {filteredProjects &&
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </Grid>
      </Card>
    </Wrapper>
  );
}
