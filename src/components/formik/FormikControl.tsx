import Input from "./Input";
import SearchableSelect from "./SearchableSelect";
import Select from "./Select";

const FormikControl = (props: { [x: string]: any }) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "searchable-select":
      return <SearchableSelect {...rest} />;
    default:
      return <div></div>;
  }
};

export default FormikControl;
