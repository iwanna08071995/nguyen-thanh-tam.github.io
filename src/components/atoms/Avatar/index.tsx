import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const Avatar = dynamic(() => import("./Avatar"), {
  ssr: false,
  loading: () => <Skeleton type="Avatar" />,
});
export default Avatar;
