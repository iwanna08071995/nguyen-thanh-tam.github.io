import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";

const TitleContent = dynamic(() => import("./TitleContent"), {
  ssr: false,
  loading: () => <Skeleton type="Title" />,
});
export default TitleContent;
