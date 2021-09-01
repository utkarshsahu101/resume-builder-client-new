import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouteLink, Route, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Alert } from "@material-ui/lab";

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

function Login() {
  const classes = useStyles();

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          {/* <Button
            color="primary"
            fullWidth
            variant="contained"
            className={classes.signIn}
          >
            Sign in using Google
          </Button>
          <Typography component="p" variant="p">
            or Sign in with your email
          </Typography> */}
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
                  autoFocus
                  inputRef={emailRef}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Enter you password"
                  inputRef={passwordRef}
                  type="password"
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
            <Grid container justifyContent="space-between">
              <Grid item>
                <RouteLink to="/forgot-password">Forgot Password</RouteLink>
                {/* <Link variant="body2" href="/resume/forgot-password">
                  Forget Password
                </Link> */}
              </Grid>
              <Grid item>
                <RouteLink to="/signUp">Don't have an account? Sign Up</RouteLink>
                {/* <Link variant="body2" href="/resume/signUp">
                  Don't have an account? Sign Up
                </Link> */}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
