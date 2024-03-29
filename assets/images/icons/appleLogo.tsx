import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const AppleIcon = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={24}
    fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#FBFBFB"
        d="M19.35 18.483c-.35.81-.765 1.557-1.246 2.243-.655.936-1.191 1.583-1.604 1.943-.641.59-1.328.892-2.063.91-.528 0-1.164-.15-1.905-.456-.744-.304-1.427-.454-2.051-.454-.656 0-1.358.15-2.11.454-.752.305-1.359.464-1.822.48-.705.03-1.408-.28-2.11-.934-.447-.391-1.007-1.061-1.678-2.011-.72-1.015-1.311-2.19-1.775-3.532-.496-1.448-.745-2.85-.745-4.209 0-1.555.335-2.896 1.007-4.02a5.916 5.916 0 0 1 2.11-2.139 5.67 5.67 0 0 1 2.854-.806c.56 0 1.294.173 2.207.514.91.342 1.494.516 1.75.516.192 0 .841-.203 1.941-.607 1.041-.375 1.92-.53 2.639-.47 1.95.158 3.414.928 4.388 2.315-1.744 1.058-2.606 2.54-2.589 4.44.016 1.482.552 2.714 1.606 3.693a5.278 5.278 0 0 0 1.605 1.054c-.128.374-.264.732-.409 1.076ZM14.88.86c0 1.161-.423 2.245-1.267 3.248-1.019 1.192-2.25 1.881-3.586 1.773a3.623 3.623 0 0 1-.027-.44c0-1.114.484-2.307 1.344-3.282.43-.494.976-.904 1.638-1.232.66-.322 1.286-.5 1.874-.531.017.155.024.31.024.464Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.24.396H19.76v23.209H.24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AppleIcon;
