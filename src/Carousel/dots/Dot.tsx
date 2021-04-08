import React from 'react';
import classnames from 'classnames';
interface DotProps {
  isSelected?: boolean;
  isHover?: (hover: boolean) => void;
  style?: React.CSSProperties;
}

const Dot: React.FC<DotProps> = ({ isSelected, isHover, style }) => {
  const classes = classnames('carousel-dot-container', {
    'carousel-dot-selected': isSelected,
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
