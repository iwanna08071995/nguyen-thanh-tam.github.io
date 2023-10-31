import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const Avatar = dynamic(() => import("./Avatar"), {
  loading: () => <Skeleton type="Avatar" />,
});
export default Avatar;
