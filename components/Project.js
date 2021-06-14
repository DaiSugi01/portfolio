import { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

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
    marginBottom: "3rem",
  },
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

      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        className={classes.skillCards}
      >
        {filteredProjects &&
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </Grid>
    </Wrapper>
  );
}
