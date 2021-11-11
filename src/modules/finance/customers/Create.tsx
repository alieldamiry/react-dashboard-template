import { Button, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "src/components/formik/FormikControl";
import * as Yup from "yup";

const Create = () => {
  const [open, setOpen] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Required Field"),

    name: Yup.string()
      .min(6, "6 characters minimum")
      .required("Required Field"),
  });

  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Add New Customer
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: 600,
            bgcolor: "#fff",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    name="name"
                    type="text"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    name="email"
                    type="text"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Create;
