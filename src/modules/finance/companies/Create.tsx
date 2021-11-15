import { Button, Grid, Modal, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FormikControl from "src/components/formik/FormikControl";
import { fetchAllBranches } from "src/controllers/services/branches";
import * as Yup from "yup";

const Create = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    gl_code: "",
    level: "",
    description: "",
    films: "",
    branch: {},
    showName: "",
  };

  const validationSchema = Yup.object({
    showName: Yup.boolean().required("Required Field"),
    name: Yup.string().when("showName", {
      is: (val: boolean) => {
        return val === true;
      },
      then: Yup.string().required("Required Field"),
    }),
    gl_code: Yup.string().required("Required Field"),
    level: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    films: Yup.string().required("Required Field"),
    branch: Yup.object().required("Required Field"),
  });

  const submitHandler = (data: any) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        {t("Create")}
      </Button>
      <Modal
        open={open}
        // onClose={}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-box">
          <div>
            <h4 className="modal-header">{t("Companies")}</h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(formikProps) => {
              if (!formikProps.values.showName) {
                setTimeout(() => {
                  formikProps.unregisterField("name");
                }, 1);
              }
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="select"
                        options={[
                          { label: "show Name", value: true },
                          { label: "hide Name", value: false },
                        ]}
                        name="showName"
                        type="text"
                        label="show Name"
                        fast
                      />
                    </Grid>
                    {formikProps.values.showName && (
                      <Grid item xs={12} md={6}>
                        <FormikControl
                          control="input"
                          name="name"
                          type="text"
                          label="Name"
                          fast
                        />
                      </Grid>
                    )}

                    <Grid item xs={12} md={6}>
                      <FormikControl
                        fast
                        control="input"
                        name="gl_code"
                        type="text"
                        label="GL Code"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        fast
                        control="select"
                        name="level"
                        label="Level"
                        options={[
                          { label: "option1", value: 1 },
                          { label: "option2", value: 2 },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="input"
                        multiline
                        minRows={2}
                        name="description"
                        label="Description"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="searchable-select"
                        label="Films"
                        name="films"
                        options={[
                          { label: "option1", value: 11 },
                          { label: "option2", value: 2 },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="searchable-select"
                        async
                        fetchFunc={fetchAllBranches}
                        name="branch"
                        label="Branch"
                      />
                    </Grid>
                  </Grid>
                  <div className="modal-footer">
                    <Button
                      color="error"
                      onClick={() => setOpen(false)}
                      variant="contained"
                      sx={{ m: 0.5 }}
                    >
                      close
                    </Button>
                    <Button type="submit" variant="contained" sx={{ m: 0.5 }}>
                      Create
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default Create;
