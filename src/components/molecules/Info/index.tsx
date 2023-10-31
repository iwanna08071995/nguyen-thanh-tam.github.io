import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const Info = dynamic(() => import("./Info"), {
  ssr: false,
  loading: () => <Skeleton type="Content" />,
});

export default Info;
