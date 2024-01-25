import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const GoogleIcon = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#FBBB00"
        d="m5.547 14.418-.807 3.013-2.95.062A11.539 11.539 0 0 1 .41 12c0-1.922.467-3.734 1.295-5.33l2.626.481 1.15 2.61a6.89 6.89 0 0 0-.371 2.24c0 .85.154 1.665.437 2.417Z"
      />
      <Path
        fill="#518EF8"
        d="M23.388 9.834a11.614 11.614 0 0 1-.05 4.585 11.589 11.589 0 0 1-4.082 6.62l-3.308-.17-.468-2.921a6.908 6.908 0 0 0 2.973-3.528h-6.198V9.834h11.133Z"
      />
      <Path
        fill="#28B446"
        d="M19.255 21.039A11.542 11.542 0 0 1 12 23.591a11.59 11.59 0 0 1-10.21-6.098l3.756-3.074a6.892 6.892 0 0 0 9.934 3.529l3.775 3.09Z"
      />
      <Path
        fill="#F14336"
        d="m19.398 3.078-3.755 3.074a6.894 6.894 0 0 0-10.162 3.61L1.707 6.669h-.001A11.589 11.589 0 0 1 12 .41c2.812 0 5.39 1.001 7.398 2.668Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.41.41H23.59V23.59H.41z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GoogleIcon;
