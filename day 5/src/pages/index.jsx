import {
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Grid,
  Container,
  Breadcrumbs,
} from "@material-ui/core";
import { Formik } from "formik";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import authService from "../service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ValidationErrorMessage from "../components/validationErrorMessage";

export const Register = () => {
  const roleList = [
    {
      id: 2,
      name: "buyer",
    },
    {
      id: 3,
      name: "seller",
    },
  ];

  const initialValues = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password mast be 5 characters at minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Both password must be same .")
      .required("confirm Password is required."),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role is required"),
  });

  const onSubmit = (data) => {
    //alert("done");

    console.log("Form is validated! Submitting the form...", data);
    
    // delete data.id;
    // delete data.confirmPassword;
    // authService.create(data).then((res) => {
    //   Navigate("/login");
    //   toast.success("Successfully registered");
    // });
  };

  return (
    <div className={styles.full}>
      <div className={styles.center}>
        <div>
          <Breadcrumbs separator=">">
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography>Create an Account</Typography>
          </Breadcrumbs>
        </div>

        <Typography>
          <h1 className={styles.decreseMargin}>Login or Create an Account</h1>
        </Typography>
        <hr className={styles.horizontalLine}></hr>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form >
            <div>
              <div>
                <Typography>Personal Information</Typography>
                <hr></hr>
                <p className={styles.myApp}>
                  Please enter the following information to create your account.
                </p>
                <div className={styles.personalInfo}>
                  <Grid container spacing={12}>
                    <Grid item xs={6}>
                      <TextField
                        id="first-name"
                        label="First Name *"
                        name="firstName"
                        margin="normal"
                        variant="outlined"
                        style={{ paddingRight: "10px", width: "90%" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <ValidationErrorMessage
                        message={errors.firstName}
                        touched={touched.firstName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="last-name"
                        label="Last Name *"
                        name="lastName"
                        margin="normal"
                        variant="outlined"
                        style={{ paddingRight: "10px", width: "90%" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <ValidationErrorMessage
                        message={errors.lastName}
                        touched={touched.lastName}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={12}>
                    <Grid item xs={6}>
                      <TextField
                        id="email-add"
                        label="Email Address *"
                        name="emailAddress"
                        margin="normal"
                        type="email"
                        variant="outlined"
                        style={{ paddingRight: "10px", width: "90%" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <ValidationErrorMessage
                        message={errors.emailAddress}
                        touched={touched.emailAddress}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="roleId"
                        id="roleId"
                        select
                        label="Role"
                        defaultValue="buyer"
                        variant="outlined"
                        onChange={handleChange}
                        style={{
                          marginTop: "16px",
                          paddingRight: "10px",
                          width: "90%",
                        }}
                        value={values.roleId}
                      >
                        {roleList.length > 0 &&
                          roleList.map((role) => (
                            <MenuItem key={role.id} value={"name" + role.id}>
                              {role.name}
                            </MenuItem>
                          ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </div>
                <Typography>Login Information</Typography>
                <hr></hr>
                <div>
                  <Grid container spacing={12}>
                    <Grid item xs={6}>
                      <TextField
                        id="password"
                        type="password"
                        label="Password"
                        name="password"
                        margin="normal"
                        variant="outlined"
                        style={{ paddingRight: "10px", width: "90%" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <ValidationErrorMessage
                        message={errors.password}
                        touched={touched.password}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="confirm-password"
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        margin="normal"
                        variant="outlined"
                        style={{ paddingRight: "10px", width: "90%" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <ValidationErrorMessage
                        message={errors.confirmPassword}
                        touched={touched.confirmPassword}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disableElevation
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
