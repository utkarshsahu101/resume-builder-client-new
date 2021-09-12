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
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useTheme } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { AccountCircle } from "@material-ui/icons";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

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

function PersonalDetails(props) {
  let { personalDetails, errors, onChange, totalSteps } = props;

  let { requiredFields, optionalFields } = personalDetails;
  let { firstName, lastName, email } = requiredFields;
  let {
    phoneNumber,
    website,
    githubUsername,
    linkedinUsername,
    facebookUsername,
  } = optionalFields;

  const classes = useStyles();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div className={classes.heading}>
        <Avatar className={classes.step}>{props.step}</Avatar>
        <Typography color="inherit" variant="h5">
          Personal Details
        </Typography>
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
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Firstname"}
                required
                fullWidth
                value={firstName}
                onChange={(e) => onChange("requiredFields", "firstName", e)}
                error={errors.fieldsObject.personalDetails.firstName}
                helperText={
                  errors.fieldsObject.personalDetails.firstName &&
                  errors.msg.personalDetails.firstName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Lastname"}
                required
                fullWidth
                value={lastName}
                onChange={(e) => onChange("requiredFields", "lastName", e)}
                error={errors.fieldsObject.personalDetails.lastName}
                helperText={
                  errors.fieldsObject.personalDetails.lastName &&
                  errors.msg.personalDetails.lastName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                label={"Email"}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                value={email}
                onChange={(e) => onChange("requiredFields", "email", e)}
                error={errors.fieldsObject.personalDetails.email}
                helperText={
                  errors.fieldsObject.personalDetails.email &&
                  errors.msg.personalDetails.email
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Phone Number"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneAndroidOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                value={phoneNumber}
                onChange={(e) => onChange("optionalFields", "phoneNumber", e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Website"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LanguageOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                value={website}
                onChange={(e) => onChange("optionalFields", "website", e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Github Username"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
                value={githubUsername}
                onChange={(e) =>
                  onChange("optionalFields", "githubUsername", e)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"LinkedIn Username"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
                value={linkedinUsername}
                onChange={(e) =>
                  onChange("optionalFields", "linkedinUsername", e)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={"Facebook Username"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
                value={facebookUsername}
                onChange={(e) =>
                  onChange("optionalFields", "facebookUsername", e)
                }
              />
            </Grid>
          </Grid>
        </form>
        <Grid container className={classes.arrowWrapper}>
          <Grid item>
            <IconButton aria-label="back" disabled>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography>
              {props.step}/{totalSteps}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="next" onClick={props.nextStep}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PersonalDetails;
