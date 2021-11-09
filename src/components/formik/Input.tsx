import { TextField } from "@mui/material";
import { Field } from "formik";

const Input = (props: { [x: string]: any }) => {
  const { label, name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }: any) => {

        return (
          <TextField
            fullWidth
            {...rest}
            {...field}
            id={name}
            label={label}
            variant="outlined"
            error={form.errors[name] && form.touched[name]}
            helperText={form.touched[name] && form.errors[name]}
          />
        );
      }}
    </Field>
  );
};

export default Input;
