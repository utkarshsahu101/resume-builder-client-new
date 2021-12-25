import {
  Avatar,
  Typography,
  TextField,
  Grid,
  useMediaQuery,
  IconButton,
  Container,
  InputAdornment,
  Button,
  Card,
  CardContent,
  CardHeader,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useState, Fragment } from "react";
import { useTheme } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const useStyles = makeStyles((theme) => ({
  headingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
  formWrapper: {
    marginTop: 10,
  },
  arrowWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addMoreButton: {
    textAlign: "center",
  },
  projectHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ProjectsDeveloped(props) {
  const classes = useStyles();
  let {
    errors,
    onProjctChange,
    totalSteps,
    step,
    prevStep,
    nextStep,
    projectsDetails,
    addMoreHandler,
    removeProjectHandler,
  } = props;

  let { requiredFields, optionalFields } = projectsDetails;

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log("optionalFields", optionalFields);
  return (
    <div>
      <div className={classes.headingWrapper}>
        <div className={classes.heading}>
          <Avatar className={classes.step}>{step}</Avatar>
          <Typography color="inherit" variant="h5">
            Project Details
          </Typography>
        </div>
        <Button variant="outlined" color="primary" onClick={addMoreHandler}>
          Add More
        </Button>
      </div>
      <hr />
      <Container fixed>
        <form>
          <Grid
            container
            spacing={isSmall ? 1 : 3}
            justifyContent="space-evenly"
            className={classes.formWrapper}
          >
            {Object.keys(optionalFields).map((project, index) => {
              let { title, link, description, githubLink } =
                optionalFields[project];
              // console.log("project", project, optionalFields[project], optionalFields[project]['title']);
              return (
                <>
                  <Grid item xs={12} sm={8}>
                    <div className={classes.projectHeading}>
                      <Tooltip
                        title="Delete"
                        arrow={true}
                        name={`project${index + 1}`}
                        onClick={removeProjectHandler}
                      >
                        <IconButton aria-label="delete">
                          <CancelOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                      <Typography variant="h6" align="center">
                        Project {index + 1}
                      </Typography>{" "}
                      <Tooltip title="Save" arrow={true}>
                        <IconButton aria-label="save">
                          <CheckCircleOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <br />
                    <TextField
                      variant="outlined"
                      label={"Title"}
                      required
                      fullWidth
                      value={title}
                      onChange={(e) =>
                        onProjctChange(
                          "projectsDetails",
                          "optionalFields",
                          `project${index + 1}`,
                          "title",
                          "string",
                          e.target.value
                        )
                      }
                    />
                    <br />
                    <br />
                    <TextField
                      variant="outlined"
                      label={"GitHub Link"}
                      required
                      fullWidth
                      value={githubLink}
                      onChange={(e) =>
                        onProjctChange(
                          "projectsDetails",
                          "optionalFields",
                          `project${index + 1}`,
                          "githubLink",
                          "string",
                          e.target.value
                        )
                      }
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          {/* <Grid
            container
            spacing={isSmall ? 1 : 3}
            justifyContent="space-evenly"
            className={classes.formWrapper}
          >
            {Object.keys(optionalFields).map((project, index) => {
              let { title, link, description, githubLink } =
                optionalFields[project];
              return (
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardHeader title={`Project ${index + 1}`} />
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        {title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid> */}
        </form>
      </Container>

      <Grid container className={classes.arrowWrapper}>
        <Grid item>
          <IconButton aria-label="back" onClick={prevStep}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography>
            {step}/{totalSteps}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="next" onClick={nextStep}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsDeveloped;
