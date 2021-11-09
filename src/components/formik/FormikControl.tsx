import Input from "./Input";
import Select from "./Select";

const FormikControl = (props: { [x: string]: any }) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return <div></div>;
  }
};

export default FormikControl;
