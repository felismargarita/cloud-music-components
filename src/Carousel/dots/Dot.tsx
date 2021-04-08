import React from 'react';
import classnames from 'classnames';
import {classNamePrefix} from '@/const/index'

interface DotProps {
  isSelected?: boolean;
  isHover?: (hover: boolean) => void;
  style?: React.CSSProperties;
}

const Dot: React.FC<DotProps> = ({ isSelected, isHover, style }) => {
  const classes = classnames(`${classNamePrefix}-carousel-dot-container`, {
    [`${classNamePrefix}-carousel-dot-selected`]: isSelected,
  });
  return (
    <div
      className={classes}
      style={style}
      onMouseEnter={() => isHover?.(true)}
      onMouseLeave={() => isHover?.(false)}
    />
  );
};

export default Dot;
