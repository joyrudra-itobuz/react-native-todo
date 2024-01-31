import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {CustomSvgProps} from '../../../src/types/globalTypes';
const HomeLogo = (props: CustomSvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none">
    <Path
      fill="url(#a)"
      d="M17.132 3.669a1.6 1.6 0 0 0-2.263 0l-11.2 11.2a1.6 1.6 0 0 0 2.263 2.262l.468-.468V27.2A1.6 1.6 0 0 0 8 28.8h3.2a1.6 1.6 0 0 0 1.6-1.6V24a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v3.2a1.6 1.6 0 0 0 1.6 1.6H24a1.6 1.6 0 0 0 1.6-1.6V16.663l.469.468a1.6 1.6 0 0 0 2.263-2.262l-11.2-11.2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16}
        x2={16}
        y1={-6.993}
        y2={35.674}
        gradientUnits="userSpaceOnUse">
        {/* <Stop stopColor="#9C6ADB" /> */}
        <Stop offset={1} stopColor={props.hoverColor || '#827D89'} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeLogo;
