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
  wrapper: {},
  section: {},
  progress: {
    textAlign: "center",
  },
  title: {},
  pos: {
    marginBottom: 12,
  },
  zeroProgress: {
    color: "#BDBDBD",
  },
});

const totalSteps = 5;
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
        isError: false,
        sectionName: "Personal Details",
        firstName: false,
        lastName: false,
        email: false,
      },
      educationDetails: {
        isError: false,
        sectionName: "Educational Details",
      },
      experienceDetails: {
        isError: false,
        sectionName: "Experience Details",
      },
    },
  });

  const [details, setDetails] = useState({
    personalDetails: {
      requiredFields: {
        firstName: "",
        lastName: "",
        email: "",
      },
      optionalFields: {
        phoneNumber: "",
        website: "",
        githubUsername: "",
        linkedinUsername: "",
        facebookUsername: "",
      },
    },
    educationDetails: {
      requiredFields: {
        class10marks: "",
        class10schoolName: "",
        class12marks: "",
        class12schoolName: "",
        graduationmarks: "",
        graduationschoolName: "",
      },
      optionalFields: {},
    },
  });

  // educational details

  // projects details

  // experience details

  // extra details

  const nextStep = () => {
    let { isError, fieldsObject, msg } = errors;
    let { personalDetails } = details;
    switch (step) {
      case 1:
        if (personalDetails.requiredFields.firstName === "") {
          isError = true;
          fieldsObject.personalDetails.firstName = true;
          fieldsObject.personalDetails.isError = true;
          msg.personalDetails.firstName = "Firstname can't be empty";
        }
        if (personalDetails.requiredFields.lastName === "") {
          isError = true;
          fieldsObject.personalDetails.lastName = true;
          fieldsObject.personalDetails.isError = true;
          msg.personalDetails.lastName = "Lastname can't be empty";
        }
        if (personalDetails.requiredFields.email === "") {
          isError = true;
          fieldsObject.personalDetails.email = true;
          fieldsObject.personalDetails.isError = true;
          msg.personalDetails.email = "Email can't be empty";
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

  const onChange = (filedType, field, e) => {
    let { fieldsObject, isError } = errors;
    fieldsObject.personalDetails[field] = false;
    isError = false;
    setError({ ...errors, fieldsObject, isError });
    setDetails({
      ...details,
      personalDetails: {
        ...details.personalDetails,
        [filedType]: {
          ...details.personalDetails[filedType],
          [field]: e.target.value,
        },
      },
    });
  };

  const componentRendered = () => {
    let { personalDetails, setDetails } = details;
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={nextStep}
            EducationDetails
            prevStep={prevStep}
            step={step}
            personalDetails={personalDetails}
            onChange={onChange}
            errors={errors}
            totalSteps={totalSteps}
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
  const checkEmpty = (currentValue) => {
    console.log("currentValue", currentValue);
    return currentValue === "";
  };
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
                {step && (
                  <CircularProgress
                    size={100}
                    variant="determinate"
                    thickness={5}
                    value={step * (100 / totalSteps)}
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
                    {step}/{totalSteps}
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignContent="space-around"
              >
                {Object.keys(details).map((section, index) => {
                  let isEmpty = true;
                  isEmpty = Object.keys(
                    details[section]["requiredFields"]
                  ).some((field) => {
                    return details[section]["requiredFields"][field] === "";
                  });
                  return (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      key={index}
                    >
                      <Typography gutterBottom>{section}</Typography>
                      {isEmpty ? (
                        <RadioButtonUncheckedOutlinedIcon
                          color="disabled"
                          fontSize="large"
                        />
                      ) : (
                        <CheckCircleOutlinedIcon
                          color="primary"
                          fontSize="large"
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
