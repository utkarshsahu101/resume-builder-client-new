import {
  Avatar,
  Typography,
  TextField,
  Grid,
  useMediaQuery,
  IconButton,
  Container,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useState, Fragment } from "react";
import { useTheme } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

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
  formWrapper: {
    marginTop: 10,
  },
  arrowWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
}));

function EducationalDetails(props) {
  const classes = useStyles();
  let {
    educationalDetails,
    errors,
    onChange,
    totalSteps,
    step,
    prevStep,
    nextStep,
  } = props;

  let { requiredFields } = educationalDetails;
  let {
    class10marks,
    class10schoolName,
    class10StartDate,
    class10EndDate,

    class12marks,
    class12schoolName,
    class12StartDate,
    class12EndDate,
  } = requiredFields;

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div className={classes.heading}>
        <Avatar className={classes.step}>{step}</Avatar>
        <Typography color="inherit" variant="h5">
          Educational Details
        </Typography>
      </div>
      <hr />
      <Container fixed>
        <form>
          <Typography>Secondary School Details</Typography>
          <Grid
            container
            spacing={isSmall ? 1 : 3}
            justifyContent="space-evenly"
            className={classes.formWrapper}
          >
            <Grid item xs={12} sm={3}>
              <TextField
                label={"Marks"}
                required
                fullWidth
                value={class10marks}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class10marks",
                    "string",
                    e
                  )
                }
                error={errors.fieldsObject.educationalDetails.class10marks}
                helperText={
                  errors.fieldsObject.educationalDetails.class10marks &&
                  errors.msg.educationalDetails.class10marks
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AssessmentOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                label={"School Name"}
                required
                fullWidth
                value={class10schoolName}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class10schoolName",
                    "string",
                    e
                  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SchoolOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                error={errors.fieldsObject.educationalDetails.class10schoolName}
                helperText={
                  errors.fieldsObject.educationalDetails.class10schoolName &&
                  errors.msg.educationalDetails.class10schoolName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                variant="dialog"
                openTo="year"
                views={["year", "month"]}
                label="Start Date"
                value={class10StartDate}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class10StartDate",
                    "date",
                    e
                  )
                }
                maxDate={new Date()}
                maxDateMessage=""
                fullWidth
                error={errors.fieldsObject.educationalDetails.class10StartDate}
                helperText={
                  errors.fieldsObject.educationalDetails.class10StartDate &&
                  errors.msg.educationalDetails.class10StartDate
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarTodayOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                variant="dialog"
                openTo="year"
                views={["year", "month"]}
                label="End Date"
                value={class10EndDate}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class10EndDate",
                    "date",
                    e
                  )
                }
                minDate={new Date(class10StartDate)}
                minDateMessage=""
                fullWidth
                error={errors.fieldsObject.educationalDetails.class10EndDate}
                helperText={
                  errors.fieldsObject.educationalDetails.class10EndDate &&
                  errors.msg.educationalDetails.class10EndDate
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarTodayOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <br />
          <br />

          <Typography>Senior Secondary School Details</Typography>
          <Grid
            container
            spacing={isSmall ? 1 : 3}
            justifyContent="space-evenly"
            className={classes.formWrapper}
          >
            <Grid item xs={12} sm={3}>
              <TextField
                label={"Marks"}
                required
                fullWidth
                value={class12marks}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class12marks",
                    "string",
                    e
                  )
                }
                error={errors.fieldsObject.educationalDetails.class12marks}
                helperText={
                  errors.fieldsObject.educationalDetails.class12marks &&
                  errors.msg.educationalDetails.class12marks
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AssessmentOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                label={"School Name"}
                required
                fullWidth
                value={class12schoolName}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class12schoolName",
                    "string",
                    e
                  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SchoolOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                error={errors.fieldsObject.educationalDetails.class12schoolName}
                helperText={
                  errors.fieldsObject.educationalDetails.class12schoolName &&
                  errors.msg.educationalDetails.class12schoolName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                variant="dialog"
                openTo="year"
                views={["year", "month"]}
                label="Start Date"
                value={class12StartDate}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class12StartDate",
                    "date",
                    e
                  )
                }
                maxDate={new Date()}
                maxDateMessage=""
                fullWidth
                error={errors.fieldsObject.educationalDetails.class12StartDate}
                helperText={
                  errors.fieldsObject.educationalDetails.class12StartDate &&
                  errors.msg.educationalDetails.class12StartDate
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarTodayOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                variant="dialog"
                openTo="year"
                views={["year", "month"]}
                label="End Date"
                value={class12EndDate}
                onChange={(e) =>
                  onChange(
                    "educationalDetails",
                    "requiredFields",
                    "class12EndDate",
                    "date",
                    e
                  )
                }
                minDate={new Date(class12StartDate)}
                minDateMessage=""
                fullWidth
                error={errors.fieldsObject.educationalDetails.class12EndDate}
                helperText={
                  errors.fieldsObject.educationalDetails.class12EndDate &&
                  errors.msg.educationalDetails.class12EndDate
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarTodayOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
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

export default EducationalDetails;
