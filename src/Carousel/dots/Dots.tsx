import React, { useState } from 'react';
import Dot from './Dot';
interface DotsProps {
  count: number;
  current: number;
  style?: React.CSSProperties;
  onChange?: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({ count, current, onChange }) => {
  return (
    <div className="carousel-dots-container">
      {new Array(count).fill(0).map((curr, index) => {
        return (
          <Dot
            key={index}
            isSelected={current === index}
            isHover={() => onChange?.(index)}
          />
        );
      })}
    </div>
  );
};

export default Dots;
