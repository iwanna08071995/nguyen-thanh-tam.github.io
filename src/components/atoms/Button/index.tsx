import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const Button = dynamic(() => import("./Button"), {
  loading: () => <Skeleton type="Button" />,
});
export default Button;
