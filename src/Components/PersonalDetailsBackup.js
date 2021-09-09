import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(150),
    //   height: theme.spacing(70),
    // },
    // width: 70%
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
  genderWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    width: '100%'
  },
  gender: {
    width: '40%'
  }
}));

const PersonalDetails = ({ nextStep, prevStep, step, personalDetails }) => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Paper className={classes.padding}>
    //     <Card>
    //       <Grid container alignItems="center" justifyContent="center">
    //         <Grid item>
    //           <CardHeader
    //             avatar={<PersonIcon />}
    //             title="Personal Details"
    //             className={classes.headerTitle}
    //           ></CardHeader>
    //         </Grid>
    //       </Grid>
    //     </Card>
    //     <form className={classes.form}>
    //       <Grid
    //         container
    //         spacing={1}
    //         alignItems="center"
    //         justifyContent="center"
    //       >
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="first name"
    //             fullWidth
    //             label="Firstname"
    //             placeholder="Enter your first name"
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="last name"
    //             fullWidth
    //             label="Lastname"
    //             placeholder="Enter your last name"
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="email"
    //             fullWidth
    //             label="Email"
    //             placeholder="Enter your email"
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="phone number"
    //             fullWidth
    //             label="Phone Number"
    //             placeholder="Enter your phone number"
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="website"
    //             fullWidth
    //             label="Website"
    //             placeholder="Enter your website"
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="github"
    //             fullWidth
    //             label="Github"
    //             placeholder="Enter your Github Username"
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="linkedin"
    //             fullWidth
    //             label="Linkedin"
    //             placeholder="Enter your Linkedin Username"
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="twitter"
    //             fullWidth
    //             label="Twitter"
    //             placeholder="Enter your Twitter Username"
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="facebook"
    //             fullWidth
    //             label="Facebook"
    //             placeholder="Enter your Facebook Username"
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             autoComplete="instagram"
    //             fullWidth
    //             label="Instagram"
    //             placeholder="Enter your Instagram Handle"
    //           />
    //         </Grid>

    //         <br />
    //         <Grid item className={classes.gridItem}>
    //           <Button
    //             type="submit"
    //             onClick={prevStep}
    //             color="primary"
    //             variant="contained"
    //             disabled
    //           >
    //             Back
    //           </Button>
    //         </Grid>
    //         <Grid item className={classes.gridItem}>
    //           <Typography>Page {step}</Typography>
    //         </Grid>
    //         <Grid item className={classes.gridItem}>
    //           <Button
    //             type="submit"
    //             onClick={nextStep}
    //             color="primary"
    //             variant="contained"
    //           >
    //             Next
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </Paper>
    // </div>
    <div>
      <Paper>
        <Typography variant="h4" align="center">
          Personal Details
        </Typography>

        <div className={classes.genderWrapper}>
          <Card className={classes.gender}>
            <CardContent>
              <Typography component="h5" variant="h5">
                Female
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.gender}>
            <CardContent>
              <Typography component="h5" variant="h5">
                Male
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Paper>
    </div>
  );
};

export default PersonalDetails;
