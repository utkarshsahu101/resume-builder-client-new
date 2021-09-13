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
      educationalDetails: {
        class10marks: "",
        class10schoolName: "",
        class10StartDate: "",
        class10EndDate: "",

        class12marks: "",
        class12schoolName: "",
        class12StartDate: "",
        class12EndDate: "",
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
      educationalDetails: {
        isError: false,
        sectionName: "Educational Details",

        class10marks: false,
        class10schoolName: false,
        class10StartDate: false,
        class10EndDate: false,

        class12marks: false,
        class12schoolName: false,
        class12StartDate: false,
        class12EndDate: false,
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
    educationalDetails: {
      requiredFields: {
        class10marks: "",
        class10schoolName: "",
        class10StartDate: null,
        class10EndDate: null,

        class12marks: "",
        class12schoolName: "",
        class12StartDate: null,
        class12EndDate: null,
      },
      optionalFields: {},
    },
  });

  // projects details

  // experience details

  // extra details

  const nextStep = () => {
    let { isError, fieldsObject, msg } = errors;
    let { personalDetails, educationalDetails } = details;
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
      case 2:
        if (educationalDetails.requiredFields.class10marks === "") {
          isError = true;
          fieldsObject.educationalDetails.class10marks = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class10marks = "Marks can't be empty";
        }
        if (educationalDetails.requiredFields.class10schoolName === "") {
          isError = true;
          fieldsObject.educationalDetails.class10schoolName = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class10schoolName =
            "School name can't be empty";
        }
        if (educationalDetails.requiredFields.class10StartDate === null) {
          isError = true;
          fieldsObject.educationalDetails.class10StartDate = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class10StartDate = "Start date can't be empty";
        }
        if (educationalDetails.requiredFields.class10EndDate === null) {
          isError = true;
          fieldsObject.educationalDetails.class10EndDate = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class10EndDate = "End date can't be empty";
        }
        if (educationalDetails.requiredFields.class12marks === '') {
          isError = true;
          fieldsObject.educationalDetails.class12marks = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class12marks = "Marks can't be empty";
        }
        if (educationalDetails.requiredFields.class12schoolName === '') {
          isError = true;
          fieldsObject.educationalDetails.class12schoolName = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class12schoolName =
            "School name can't be empty";
        }
        if (educationalDetails.requiredFields.class12StartDate === null) {
          isError = true;
          fieldsObject.educationalDetails.class12StartDate = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class12StartDate = "Start date can't be empty";
        }
        if (educationalDetails.requiredFields.class12EndDate === null) {
          isError = true;
          fieldsObject.educationalDetails.class12EndDate = true;
          fieldsObject.educationalDetails.isError = true;
          msg.educationalDetails.class12EndDate = "End date can't be empty";
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

  const onChange = (section, filedType, field, dataType, e) => {
    let { fieldsObject, isError } = errors;
    fieldsObject[section][field] = false;
    isError = false;
    setError({ ...errors, fieldsObject, isError });

    if (dataType === "string") {
      setDetails({
        ...details,
        [section]: {
          ...details[section],
          [filedType]: {
            ...details[section][filedType],
            [field]: e.target.value,
          },
        },
      });
    }

    if (dataType === "date") {
      setDetails({
        ...details,
        [section]: {
          ...details[section],
          [filedType]: {
            ...details[section][filedType],
            [field]: e,
          },
        },
      });
    }
  };

  const componentRendered = () => {
    let { personalDetails, setDetails, educationalDetails } = details;
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={nextStep}
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
            totalSteps={totalSteps}
            educationalDetails={educationalDetails}
            onChange={onChange}
            errors={errors}
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

  const camelPad = (str) => {
    return (
      str
        // Look for long acronyms and filter out the last letter
        .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
        // Look for lower-case letters followed by upper-case letters
        .replace(/([a-z\d])([A-Z])/g, "$1 $2")
        // Look for lower-case letters followed by numbers
        .replace(/([a-zA-Z])(\d)/g, "$1 $2")
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
        // Remove any white space left around the word
        .trim()
    );
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
                      <Typography gutterBottom>{camelPad(section)}</Typography>
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
