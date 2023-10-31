import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const Languages = dynamic(() => import("./Languages"), {
  loading: () => <Skeleton type="Content" rows={2} />,
});
export default Languages;
