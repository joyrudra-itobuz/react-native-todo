import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    fill="#FBFBFB"
    baseProfile="tiny"
    viewBox="0 0 42 42">
    <Path
      fillRule="evenodd"
      d="M31 38.32 13.391 21 31 3.68 28.279 1 8 21.01 28.279 41z"
    />
  </Svg>
);
const BackLogo = memo(SvgComponent);
export default BackLogo;
