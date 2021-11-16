import { useQuery } from "react-query";
import SearchableSelect from "./SearchableSelect";

const AsyncSearchableSelect = (props: any) => {
  const { queryFunc, queryKey, ...rest } = props;
  const { data, isError, isLoading } = useQuery(queryKey, queryFunc);

  if (isError) {
    <div>Couldn't fetch {props.name} </div>;
  }

  return <SearchableSelect disabled={isLoading} options={data} {...rest} />;
};

export default AsyncSearchableSelect;
