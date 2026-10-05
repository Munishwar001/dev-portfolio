import type { SVGProps } from "react";

const Dotnet = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#512BD4" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="9.5"
      fill="#fff"
    >
      .NET
    </text>
  </svg>
);

export { Dotnet };
