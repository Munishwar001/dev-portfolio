import type { SVGProps } from "react";

const Redis = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#DC382D" />
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="8"
      fill="#fff"
    >
      Redis
    </text>
  </svg>
);

export { Redis };
