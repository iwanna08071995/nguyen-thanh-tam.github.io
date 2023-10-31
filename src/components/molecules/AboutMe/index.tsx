import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const AboutMe = dynamic(() => import("./AboutMe"), {
  loading: () => <Skeleton type="Content" rows={6} />,
});
export default AboutMe;
