"use client";
import React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Stack from "@mui/joy/Stack";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function LoginFinal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }
    setLoading(false);
  }
  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 320,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "lg",
          boxShadow: "lg",
        }}
        variant="soft"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          {error && <div>{error}</div>}
          <Typography level="body-sm">Sign up to continue.</Typography>
        </div>
        <Stack sx={{ gap: 4, mt: 0 }}>
          <form onSubmit={handleSubmit}>
            <FormControl required>
              <FormLabel>Email</FormLabel>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Password</FormLabel>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Confirm Password</FormLabel>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </FormControl>
            <Typography level="body-sm">
              Already have an account?{" "}
              <Link href="/login" level="title-sm">
                Log In
              </Link>
            </Typography>
            <Stack sx={{ gap: 4, mt: 2 }}>
              <button disabled={loading} type="submit">
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </Stack>
          </form>
        </Stack>
      </Sheet>
    </main>
  );
}
