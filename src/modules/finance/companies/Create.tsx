import { Button, Grid, Modal } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import FormikControl from "src/components/formik/FormikControl";
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
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    gl_code: Yup.string().required("Required Field"),
    level: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
    films: Yup.string().required("Required Field"),
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
        <div
          // sx={{
          //   position: "absolute",
          //   borderRadius: 2,
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          //   width: "100%",
          //   maxWidth: 600,
          //   bgcolor: "#fff",
          //   boxShadow: 24,
          //   p: 4,
          // }}
          className="modal-box"
        >
          <div>
            <h4 className="modal-header">{t("Companies")}</h4>
          </div>
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
                    name="gl_code"
                    type="text"
                    label="GL Code"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
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
                    multiline
                    minRows={2}
                    name="films"
                    options={[
                      { label: "option1", value: 11 },
                      { label: "option2", value: 2 },
                    ]}
                    label="Films"
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
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default Create;
