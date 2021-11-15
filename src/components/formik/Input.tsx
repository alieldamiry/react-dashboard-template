import { TextField } from "@mui/material";
import { FastField, Field } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Input = (props: { [x: string]: any }) => {
  const { label, name, fast, ...rest } = props;
  const { t } = useTranslation();
  const FieldComponent = fast ? FastField : Field;
  useEffect(() => {
    return () => {
      console.log('removing Component.................');
    };
  }, []);
  return (
    <FieldComponent name={name}>
      {({ field, form }: any) => {
        return (
          <TextField
            fullWidth
            {...rest}
            {...field}
            id={name}
            label={t(label)}
            variant="outlined"
            error={form.errors[name] && form.touched[name]}
            helperText={form.touched[name] && form.errors[name]}
          />
        );
      }}
    </FieldComponent>
  );
};

export default Input;
