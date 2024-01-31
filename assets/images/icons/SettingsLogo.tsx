import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from '../../../src/types/globalTypes';
const SettingsLogo = (props: CustomSvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none">
    <Path
      stroke={props.hoverColor || '#827D89'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.266 5.756c.569-2.341 3.9-2.341 4.468 0a2.299 2.299 0 0 0 3.43 1.421c2.058-1.254 4.413 1.101 3.159 3.16a2.299 2.299 0 0 0 1.42 3.43c2.343.568 2.343 3.898 0 4.467a2.299 2.299 0 0 0-1.42 3.43c1.254 2.058-1.101 4.413-3.16 3.159a2.299 2.299 0 0 0-3.43 1.42c-.568 2.343-3.898 2.343-4.467 0a2.299 2.299 0 0 0-3.43-1.42c-2.058 1.254-4.413-1.101-3.159-3.16a2.299 2.299 0 0 0-1.42-3.43c-2.342-.568-2.342-3.898 0-4.467a2.299 2.299 0 0 0 1.42-3.43c-1.254-2.058 1.101-4.413 3.16-3.159 1.329.81 3.062.092 3.43-1.42Z"
    />
    <Path
      stroke={props.hoverColor || '#827D89'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);
export default SettingsLogo;
