import { Autocomplete, TextField } from "@mui/material";
import { FastField, Field } from "formik";
import { useTranslation } from "react-i18next";

type optionType = {
  label: string;
  value: any;
};

const SearchableSelect = (props: any) => {
  const { label, name, fast, ...rest } = props;
  const { t } = useTranslation();
  const FieldComponent = fast ? FastField : Field;
  return (
    <FieldComponent name={name}>
      {({ field, form }: any) => {
        return (
          <Autocomplete
            {...rest}
            disablePortal
            getOptionLabel={(option: optionType) => `${option.label}`}
            onChange={(__, option: optionType) =>
              form.setFieldValue(name, option?.value || "")
            }
            id={name}
            options={props.options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={form.errors[name] && form.touched[name]}
                helperText={form.touched[name] && form.errors[name]}
                label={t(label)}
              />
            )}
          />
        );
      }}
    </FieldComponent>
  );
};

export default SearchableSelect;
