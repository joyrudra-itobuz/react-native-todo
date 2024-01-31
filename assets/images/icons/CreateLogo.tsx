import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CreateLogo = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none">
    <Path
      stroke="#827D89"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16 5.333v21.334M26.667 16H5.333"
    />
  </Svg>
);
export default CreateLogo;
