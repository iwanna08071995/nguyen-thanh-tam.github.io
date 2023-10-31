import dynamic from "next/dynamic";
import Skeleton from "../../atoms/Skeleton";

const SkillsSummary = dynamic(() => import("./SkillsSummary"), {
  ssr: false,
  loading: () => <Skeleton type="Content" rows={4} />,
});
export default SkillsSummary;
