"use client";
import { Button, Container, Paper, TextField } from "@mui/material";
import styles from "./page.module.scss";

export default function Auth() {
  return (
    <Container maxWidth="xs">
      <Paper className={styles.paper} variant="elevation" elevation={1}>
        <TextField variant="outlined" color="primary" label="Email" />
        <TextField
          variant="outlined"
          color="primary"
          label="Password"
          type="password"
        />
        <Button color="primary" variant="contained" size="large">
          Login
        </Button>
      </Paper>
    </Container>
  );
}
