import { TextField } from "@mui/material";
import { FastField, Field } from "formik";
import { useTranslation } from "react-i18next";

const Input = (props: { [x: string]: any }) => {
  const { label, name, fast, ...rest } = props;
  const { t } = useTranslation();
  const FieldComponent = fast ? FastField : Field;
  return (
    <FieldComponent name={name}>
      {({ field, form }: any) => {
        console.log(`${name} rendering...`);
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
