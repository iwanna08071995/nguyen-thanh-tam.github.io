import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const SkillsSummary = dynamic(() => import("./SkillsSummary"), {
  loading: () => <Skeleton type="Content" rows={4} />,
});
export default SkillsSummary;
