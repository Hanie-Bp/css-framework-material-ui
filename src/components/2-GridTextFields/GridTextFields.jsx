import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const GridTextFields = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitForm = (values) => {
    console.log(values);
    reset();
  };
  return (
    <Container fixed>
      <Typography
        variant="h3"
        component="h1"
        textAlign="center"
        sx={{ margin: "20px" }}
      >
        Create Your Account
      </Typography>
      <Box component="form" onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              {...register("fullname")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              {...register("username")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Age"
              variant="outlined"
              type="number"
              {...register("age")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              {...register("email")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Bio"
              variant="outlined"
              multiline
              rows="4"
              {...register("bio")}
            />
          </Grid>
          <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "50%" }}
              type="submit"
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default GridTextFields;
