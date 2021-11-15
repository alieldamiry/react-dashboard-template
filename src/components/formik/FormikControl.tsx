import AsyncSearchableSelect from "./AsyncSearchableSelect";
import Input from "./Input";
import SearchableSelect from "./SearchableSelect";
import Select from "./Select";

const FormikControl = (props: { [x: string]: any }) => {
  const { control, async, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "searchable-select":
      if (async) {
        return <AsyncSearchableSelect {...rest} />;
      }
      return <SearchableSelect {...rest} />;
    default:
      return <div></div>;
  }
};

export default FormikControl;
