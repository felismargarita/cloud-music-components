import React from 'react';
import classnames from 'classnames';
interface CardProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  text?: string;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, onClick, text, className }) => {
  const classes = classnames('carousel-card-container', className);

  return (
    <div className={classes} onClick={onClick}>
      {React.cloneElement(children as React.ReactElement, {
        style: { width: '100%', height: '100%'},
      })}
      <div className="carousel-card-text">{text}</div>
    </div>
  );
};

export default Card;
