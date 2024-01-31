import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from '../../../src/types/globalTypes';
const CreateLogo = (props: CustomSvgProps) => (
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
      strokeWidth={3}
      d="M16 5.333v21.334M26.667 16H5.333"
    />
  </Svg>
);
export default CreateLogo;
