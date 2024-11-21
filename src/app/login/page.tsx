"use client";
import { Button, Container, Link, Paper, TextField } from "@mui/material";
import NextLink from "next/link";
import styles from "./page.module.scss";

export default function Login() {
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
          <Button color="primary" variant="contained" size="large">
            Login
          </Button>
          <Link
            color="primary"
            textAlign="center"
            href="/register"
            component={NextLink}
          >
            Register new account
          </Link>
        </form>
      </Paper>
    </Container>
  );
}
