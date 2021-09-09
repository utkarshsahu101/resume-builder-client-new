import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  step: {
    marginRight: 10,
    borderRadius: "50%",
  },
  genderWrapper: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
  },
  gender: {
    width: "40%",
  },
}));

function PersonalDetails(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <div className={classes.heading}>
        <Avatar className={classes.step}>{props.step}</Avatar>
        <Typography color="inherit" variant="h5">
          Personal Details
        </Typography>
      </div>
      <hr />
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default PersonalDetails;
