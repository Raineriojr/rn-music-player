import * as React from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

export const ProgressBar = ({ percent }: { percent: number }) => {    
  return (
    <Svg
      height="20"
      width="100%"
    >
      <Line
        x1="1%"
        y1={10}
        x2="99%"
        y2={10}
        stroke="#c5c5cc"
        strokeOpacity={0.6}
        strokeWidth="7"
        strokeLinecap='round'
      />
      <Rect rx={5} y={6} width={`${percent}%`} height="40%" fill="#d9d9d9" />        
    </Svg>
  );
}