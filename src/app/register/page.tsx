"use client";
import {
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import styles from "./page.module.scss";

export default function Register() {
  return (
    <Container maxWidth="xs">
      <Paper variant="elevation" elevation={1}>
        <form className={styles.form}>
          <TextField
            variant="outlined"
            color="primary"
            label="Email"
            name="email"
          />
          <TextField
            variant="outlined"
            color="primary"
            label="Password"
            type="password"
            name="password"
          />
          <TextField
            variant="outlined"
            color="primary"
            label="Repeat password"
            type="password"
            name="passwordRepeat"
          />
          <TextField
            variant="outlined"
            color="primary"
            label="Nickname"
            name="nickname"
          />
          <Button color="primary" variant="contained" size="large">
            Login
          </Button>
          <Typography textAlign="center">
            Already have account?{" "}
            <Link color="primary" href="/login" component={NextLink}>
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
}
