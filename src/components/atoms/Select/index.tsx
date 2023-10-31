import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const Select = dynamic(() => import("./Select"), {
  loading: () => <Skeleton type="Select" />,
});
export default Select;
