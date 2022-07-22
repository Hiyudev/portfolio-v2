import * as React from "react";
import { SVGProps } from "react";

const BigLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={192}
    height={192}
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="Kevin's logo"
    {...props}
  >
    <title>Kevin&apos;s logo</title>
    <path
      d="M107.25 0L71.5 35.8L44.6875 62.65V0H0V107.4V179L71.5 107.4L143 35.8V0H107.25Z"
      fill="#DB2777"
    />
    <path
      d="M81.75 192L118.5 155.2L146.062 127.6V192H192V81.6V8L118.5 81.6L45 155.2V192H81.75Z"
      fill="#DB2777"
    />
  </svg>
);

export default BigLogoIcon;
