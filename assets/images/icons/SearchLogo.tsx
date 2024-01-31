import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from '../../../src/types/globalTypes';
const SearchLogo = (props: CustomSvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none">
    <Path
      stroke={props.hoverColor || '#827D89'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m28 28-8-8m2.667-6.667a9.333 9.333 0 1 1-18.667 0 9.333 9.333 0 0 1 18.667 0Z"
    />
  </Svg>
);
export default SearchLogo;
