import { MenuItem, TextField } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";

// interface propType {
//   label: string;
//   name: string;
//   [x: string]: any;
// }

const Select = (props: { [x: string]: any }) => {
  const { label, name, options, ...rest } = props;
  const { t } = useTranslation();
  return (
    <Field name={name}>
      {({ field, form }: any) => {
        return (
          <TextField
            sx={{ width: "100%" }}
            {...rest}
            {...field}
            id={name}
            label={t(label)}
            variant="outlined"
            error={form.errors[name] && form.touched[name]}
            helperText={t(form.errors[name])}
            select
          >
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    </Field>
  );
};

export default Select;
