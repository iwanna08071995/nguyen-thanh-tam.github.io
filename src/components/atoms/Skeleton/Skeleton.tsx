import { skeletonProps, showSkeletonFunc } from "@/interfaces";
import { Skeleton as SkeletonAnt } from "antd";

const Skeleton = (props: skeletonProps) => {
  const { type, rows } = props;

  const showSkeleton: showSkeletonFunc = (type, rows = 2) => {
    switch (type) {
      case "Button" || "Select":
        return (
          <SkeletonAnt.Button
            active={false}
            size="default"
            shape="square"
            block={false}
          />
        );

      case "Avatar":
        return <SkeletonAnt.Avatar active={true} size={192} shape="circle" />;
      case "Select":
        return (
          <SkeletonAnt.Button
            active={false}
            size="default"
            shape="square"
            block={false}
          />
        );

      case "Content":
        return <SkeletonAnt paragraph={{ rows: rows as number }} />;

      case "Title":
        return <SkeletonAnt.Input active={false} size="default" />;
      default:
        <></>;
    }
  };

  return showSkeleton(type, rows);
};

export default Skeleton;
