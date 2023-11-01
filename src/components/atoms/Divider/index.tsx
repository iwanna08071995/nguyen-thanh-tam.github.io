import dynamic from "next/dynamic";

const Divider = dynamic(() => import("./Divider"), {
  ssr: false,
  loading: () => <></>,
});
export default Divider;
