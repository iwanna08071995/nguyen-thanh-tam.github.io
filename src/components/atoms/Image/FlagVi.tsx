import { imageProps } from "@/interfaces";

const FlagVi = (props: imageProps) => {
  const { size = 800 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 -4 28 28"
      {...props}
    >
      <g clipPath="url(#a)">
        <rect width={28} height={20} fill="#fff" rx={2} />
        <mask
          id="b"
          width={28}
          height={20}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <rect width={28} height={20} fill="#fff" rx={2} />
        </mask>
        <g mask="url(#b)">
          <path fill="#EA403F" d="M0 0h28v20H0z" />
          <path
            fill="#FFFE4E"
            fillRule="evenodd"
            d="m14 12.34-3.527 2.514 1.301-4.13-3.48-2.578 4.33-.04L14 4l1.375 4.107 4.331.039-3.48 2.577 1.3 4.131L14 12.34Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <rect width={28} height={20} fill="#fff" rx={2} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FlagVi;
