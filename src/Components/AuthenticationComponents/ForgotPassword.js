import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useRef, useState } from "react";
import { Link as RouteLink, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signIn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function ForgotPassword() {
  const classes = useStyles();

  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  placeholder="Enter you email"
                  autoFocus
                  inputRef={emailRef}
                  type="email"
                />
              </Grid>
            </Grid>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              className={classes.signIn}
              type="submit"
              disabled={loading}
            >
              Reset Password
            </Button>
          </form>
          <RouteLink to="/login">Already have an account? Sign in</RouteLink>
          {/* <Link variant="body2" href="/login">
            Already have an account? Sign in
          </Link> */}
        </div>
      </Container>
    </div>
  );
}

export default ForgotPassword;
