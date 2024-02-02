import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const FinishLogo = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none">
    <Path
      stroke="#17c200"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 13 2.667 2.667L17 10.333M25 13c0 6.627-5.373 12-12 12S1 19.627 1 13 6.373 1 13 1s12 5.373 12 12Z"
    />
  </Svg>
);
export default FinishLogo;
