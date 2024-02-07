import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DeleteLogo = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none">
    <Path
      stroke="#CE3A54"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.834 6.333-1.157 16.19A2.667 2.667 0 0 1 18.017 25H6.983a2.667 2.667 0 0 1-2.66-2.477L3.167 6.333m6.667 5.334v8m5.333-8v8M16.5 6.333v-4C16.5 1.597 15.903 1 15.167 1H9.834C9.097 1 8.5 1.597 8.5 2.333v4m-6.667 0h21.334"
    />
  </Svg>
);
export default DeleteLogo;
