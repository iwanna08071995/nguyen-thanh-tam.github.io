import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const TimeLine = dynamic(() => import("./TimeLine"), {
  ssr: false,
  loading: () => <Skeleton type="Content" rows={3} />,
});
export default TimeLine;
