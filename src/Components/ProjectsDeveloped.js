import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      height: theme.spacing(50),
    },
  },
  padding: {
    padding: "10px",
    margin: "20px auto",
  },
  headerTitle: {
    // textAlign: 'center'
  },
  form: {
    margin: "20px 35px",
  },
  gridItem: {
    // margin: 2
  },
}));

function ProjectsDeveloped({ prevStep, nextStep, step }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignContent="center" spacing={2}>
        <Grid item className={classes.gridItem}>
          <Button
            type="submit"
            onClick={prevStep}
            color="primary"
            variant="contained"
          >
            Back
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography>Page {step}</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            type="submit"
            onClick={nextStep}
            color="primary"
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsDeveloped;
