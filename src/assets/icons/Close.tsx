import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m12 10.728 4.455-4.456 1.273 1.273L13.273 12l4.455 4.455-1.273 1.273L12 13.273l-4.455 4.455-1.273-1.273L10.727 12 6.272 7.545l1.273-1.273z"
      opacity={0.4}
    />
  </svg>
);
export default SvgClose;
