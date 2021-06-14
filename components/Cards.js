import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "2rem 0.5rem",
    margin: "1rem 0.5rem"
  },
  title: {
    fontWeight: 700,
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
  description: {
    color: "#263238",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  subTitle: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    marginTop: "0.75rem",
    color: "#01579b",
    fontWeight: 500
  }
});

export default function Cards({ content }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Image src={content.logo} width={60} height={60} alt="skill" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {content.title}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {content.comment}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.subTitle}
          >
            Language
          </Typography>

          {content.language.map((language) => (
            <Typography
              key={language}
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {language}
            </Typography>
          ))}

          {content.database && (
            <Typography
              key={content.database}
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.subTitle}
            >
              Database
            </Typography>
          )}

          {content.database &&
            content.database.map((database) => (
              <Typography
                key={database}
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {database}
              </Typography>
            ))}

          {content.infrastructure && (
            <Typography
              key={content.infrastructure}
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.subTitle}
            >
              Infrastructure
            </Typography>
          )}

          {content.infrastructure &&
            content.infrastructure.map((infra) => (
              <Typography
                key={infra}
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {infra}
              </Typography>
            ))}
        </CardContent>
    </Card>
  );
}
