import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const TitleContent = dynamic(() => import("./TitleContent"), {
  loading: () => <Skeleton type="Title" />,
});
export default TitleContent;
