import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ProjectsDeveloped from "./ProjectsDeveloped";
import EducationalDetails from "./EducationalDetails";
import ExperienceDetails from "./ExperienceDetails";
import ExtraDetails from "./ExtraDetails";
import Header from "./Header";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";

const useStyles = makeStyles({
  wrapper: {
    // margin: 25,
  },
  section: {
    // width: "75%",
    // marignRight: 10,
  },
  progress: {
    // minWidth: 350,
    // width: "25%",
    textAlign: "center",
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  zeroProgress: {
    color: "#BDBDBD",
  },
});

function Resume() {
  const [step, setStep] = useState(1);
  const [errors, setError] = useState({
    isError: false,
    msg: {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
      },
    },
    fieldsObject: {
      personalDetails: {
        firstName: false,
        lastName: false,
        email: false,
      },
    },
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    website: "",
    githubUsername: "",
    linkedinUsername: "",
    facebookUsername: "",
  });

  let requiredFields = ["firstName", "lastName", "email"];

  // educational details

  // projects details

  // experience details

  // extra details


  const nextStep = () => {
    let { isError, fieldsObject, msg } = errors;
    switch (step) {
      case 1:
        if (personalDetails.firstName === "") {
          isError = true;
          fieldsObject.personalDetails.firstName = true;
          msg.personalDetails.firstName = "Firstname field can't be empty";
        }
        if (personalDetails.lastName === "") {
          isError = true;
          fieldsObject.personalDetails.lastName = true;
          msg.personalDetails.lastName = "Lastname field can't be empty";
        }
        if (personalDetails.email === "") {
          isError = true;
          fieldsObject.personalDetails.email = true;
          msg.personalDetails.email = "Email field can't be empty";
        }
        setError({ ...errors, fieldsObject, isError, msg });
        break;

      default:
        break;
    }
    if (!isError) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {};


  const onChange = (field, e) => {
    let { fieldsObject, isError } = errors;
    fieldsObject.personalDetails[field] = false;
    isError = false;
    setError({ ...errors, fieldsObject, isError });
    setPersonalDetails({
      ...personalDetails,
      [field]: e.target.value,
    });
  };
  // console.log("personalDetails", personalDetails);


  const componentRendered = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={nextStep}
            EducationDetails
            prevStep={prevStep}
            step={step}
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            onChange={onChange}
            errors={errors}
            setError={setError}
          />
        );
      case 2:
        return (
          <EducationalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 3:
        return (
          <ProjectsDeveloped
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 4:
        return (
          <ExperienceDetails
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 5:
        return (
          <ExtraDetails nextStep={nextStep} prevStep={prevStep} step={step} />
        );
      default:
      // break;
    }
  };

  const classes = useStyles();

  const sections = [
    "Personal Details",
    "Educational Details",
    "project Details",
    "Experience Details",
    "Extra Details",
  ];
  return (
    <>
      <Header />
      <Box
        display="flex"
        width="85%"
        mx={"auto"}
        mt={5}
        className={classes.wrapper}
      >
        <Box width={3 / 4} mr={2} className={classes.section}>
          {componentRendered()}
        </Box>
        <Box ml={2} width={1 / 4}>
          <Card className={classes.progress} variant="outlined">
            <CardContent>
              <CardHeader
                title={
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    PROGRESS
                  </Typography>
                }
              />

              <Box position="relative" display="inline-flex">
                {step - 1 === 0 && (
                  <CircularProgress
                    size={100}
                    variant="determinate"
                    thickness={5}
                    value={100}
                    className={classes.zeroProgress}
                  />
                )}
                {step - 1 !== 0 && (
                  <CircularProgress
                    size={100}
                    variant="determinate"
                    thickness={5}
                    value={(step - 1) * (100 / 5)}
                  />
                )}
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="textSecondary"
                  >
                    {step - 1}/5
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignContent="space-around"
              >
                {sections.map((section, index) => (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    key={index}
                  >
                    <Typography gutterBottom>{section}</Typography>
                    {!index ? (
                      <CheckCircleOutlinedIcon
                        color="primary"
                        fontSize="large"
                      />
                    ) : (
                      <RadioButtonUncheckedOutlinedIcon
                        color="disabled"
                        fontSize="large"
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
