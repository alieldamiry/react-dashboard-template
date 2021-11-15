import { MenuItem, TextField } from "@mui/material";
import { FastField, Field } from "formik";
import { useTranslation } from "react-i18next";

interface propType {
  [x: string]: any;
}

const Select = (props: propType) => {
  const { label, name, options, fast, ...rest } = props;
  const { t } = useTranslation();
  const FieldComponent = fast ? FastField : Field;

  return (
    <FieldComponent name={name}>
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
            helperText={form.touched[name] && form.errors[name]}
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
    </FieldComponent>
  );
};

export default Select;
