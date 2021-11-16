import { Button, Grid, Modal } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import FormikControl from "src/components/formik/FormikControl";
import {
  updateCompany,
  fetchParentCompanies,
} from "src/controllers/services/companies";
import * as Yup from "yup";

interface propTypes {
  data: any;
  refetch: any;
}

const Edit: React.FC<propTypes> = ({ data, refetch }) => {
  const [open, setOpen] = useState(false);
  const { mutate, isLoading } = useMutation(
    (formData: any) => updateCompany(formData, data.id),
    {
      onSuccess: () => {
        setOpen(false);
        refetch();
      },
    }
  );
  const { t } = useTranslation();

  const initialValues = {
    name: data.name,
    localized_name: data.localized_name,
    code: data.code,
    status: data.status,
    type: data.type,
    owned_percentage: data.owned_percentage,
    parent_id: data.parent_id,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    localized_name: Yup.string(),
    code: Yup.string().required("Required Field"),
    status: Yup.string().required("Required Field"),
    type: Yup.string().required("Required Field"),
    owned_percentage: Yup.string().when("type", {
      is: (val: string) => {
        return val !== "holding";
      },
      then: Yup.string().required("Required Field"),
    }),
    parent_id: Yup.string().when("type", {
      is: (val: string) => {
        return val !== "holding";
      },
      then: Yup.string().required("Required Field"),
    }),
  });

  const submitHandler = (data: any) => {
    const modifedData = { ...data };
    if (modifedData.type === "holding") {
      delete modifedData.owned_percentage;
      delete modifedData.parent_id;
    }
    console.log("modifedData", modifedData);

    mutate(modifedData);
  };

  return (
    <>
      <Button size="small" onClick={() => setOpen(true)} variant="contained">
        {t("Edit")}
      </Button>
      <Modal
        open={open}
        // onClose={}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-box">
          <div>
            <h4 className="modal-header">{t("Edit ")}</h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(formikProps) => {
              console.log(formikProps);
              return (
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
                        name="localized_name"
                        type="text"
                        label="Localized Name"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="input"
                        name="code"
                        type="text"
                        label="Code"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="select"
                        options={[
                          { label: "Yes", value: "yes" },
                          { label: "No", value: "no" },
                        ]}
                        name="status"
                        type="text"
                        label="Status"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormikControl
                        control="select"
                        name="type"
                        label="Type"
                        options={[
                          { label: "Holding", value: "holding" },
                          { label: "Sub", value: "sub" },
                          { label: "Both", value: "both" },
                        ]}
                      />
                    </Grid>
                    {formikProps.values.type !== "holding" && (
                      <>
                        <Grid item xs={12} md={6}>
                          <FormikControl
                            control="input"
                            name="owned_percentage"
                            type="number"
                            label="Percentage"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormikControl
                            control="searchable-select"
                            name="parent_id"
                            label="Holding company"
                            queryFunc={fetchParentCompanies}
                            queryKey="parent-companies"
                            async
                          />
                        </Grid>
                      </>
                    )}
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
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isLoading}
                      sx={{ m: 0.5 }}
                    >
                      Submit
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

export default Edit;
