import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const SkillsList = dynamic(() => import("./SkillsList"), {
  loading: () => <Skeleton type="Content" rows={3} />,
});
export default SkillsList;
