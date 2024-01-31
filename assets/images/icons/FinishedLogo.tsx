import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from '../../../src/types/globalTypes';
const FinishedLogo = (props: CustomSvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none">
    <Path
      fill={props.hoverColor || '#827D89'}
      d="M12.707 17.96a1 1 0 1 0-1.414 1.414l1.414-1.414Zm1.96 3.373-.708.707a1 1 0 0 0 1.415 0l-.708-.707Zm6.04-4.626a1 1 0 1 0-1.414-1.414l1.414 1.414Zm3.626-7.374v16h2v-16h-2ZM22.667 27H9.332v2h13.333v-2Zm-15-1.667v-16h-2v16h2ZM9.332 7.667H12v-2H9.333v2Zm10.667 0h2.666v-2H20v2ZM9.333 27c-.92 0-1.667-.746-1.667-1.667h-2A3.667 3.667 0 0 0 9.334 29v-2Zm15-1.667c0 .92-.746 1.667-1.666 1.667v2a3.667 3.667 0 0 0 3.666-3.667h-2Zm2-16a3.667 3.667 0 0 0-3.666-3.666v2c.92 0 1.666.746 1.666 1.666h2Zm-18.666 0c0-.92.746-1.666 1.666-1.666v-2a3.667 3.667 0 0 0-3.667 3.666h2Zm3.626 10.04 2.666 2.667 1.415-1.414-2.667-2.666-1.414 1.414Zm4.08 2.667 5.334-5.333-1.414-1.414-5.334 5.333 1.415 1.414ZM14.667 5h2.667V3h-2.666v2Zm2.667 3.333h-2.666v2h2.666v-2Zm-2.666 0c-.921 0-1.667-.746-1.667-1.666h-2a3.667 3.667 0 0 0 3.666 3.666v-2ZM19 6.667c0 .92-.746 1.666-1.667 1.666v2A3.667 3.667 0 0 0 21 6.667h-2ZM17.333 5C18.253 5 19 5.746 19 6.667h2A3.667 3.667 0 0 0 17.333 3v2Zm-2.666-2A3.667 3.667 0 0 0 11 6.667h2C13 5.747 13.746 5 14.666 5V3Z"
    />
  </Svg>
);
export default FinishedLogo;
