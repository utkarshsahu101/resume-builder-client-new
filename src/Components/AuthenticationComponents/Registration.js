import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouteLink, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
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

function Registration() {
  const classes = useStyles();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Typography component="h3" variant="subtitle1">
            Let's create your account
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
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
                  inputRef={emailRef}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  autoComplete="password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Enter you password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  autoComplete="confirm password"
                  name="confirm_password"
                  variant="outlined"
                  required
                  fullWidth
                  id="confirm_password"
                  label="Confirm Password"
                  placeholder="Confirm you password"
                  inputRef={confirmPasswordRef}
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
              Sign in
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link variant="body2" href="/resume/login">
                  Already have an account? Sign in
                </Link> */}
                <RouteLink to="/login">Already have an account? Sign in</RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Registration;
