import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const MicLogo = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    className="icon multi-color"
    viewBox="0 0 24 24">
    <Path
      d="M16 10c0 2.21-1.79 5-4 5s-4-2.79-4-5a5 5 0 0 0 8 0Z"
      style={{
        fill: '#b7b7b7',
        strokeWidth: 2,
      }}
    />
    <Path
      d="M16 7v4a4 4 0 0 1-8 0V7a4 4 0 1 1 8 0Z"
      style={{
        fill: 'none',
        stroke: '#000',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
    <Path
      d="M18.24 16a8 8 0 0 1-12.48 0M12 19v2"
      style={{
        fill: 'none',
        stroke: '#2ca9bc',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default MicLogo;
