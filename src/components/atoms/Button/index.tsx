import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const Button = dynamic(() => import("./Button"), {
  ssr: false,
  loading: () => <Skeleton type="Button" />,
});
export default Button;
