import { TextField } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";

const Input = (props: { [x: string]: any }) => {
  const { label, name, ...rest } = props;
  const { t } = useTranslation();

  return (
    <Field name={name}>
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
            helperText={t(form.touched[name] && form.errors[name])}
          />
        );
      }}
    </Field>
  );
};

export default Input;
