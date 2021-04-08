import React from 'react';
import Icon from '@/Icon/index';
import classnames from 'classnames';
interface ButtonProps {
  onClick?: () => void;
  placement: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, placement, className }) => {
  const classes = classnames(className, 'carousel-button-container');
  return (
    <div className={classes} onClick={() => onClick?.()}>
      {placement === 'left' ? (
        <Icon type="arrowLeft" className="carousel-button-icon" />
      ) : (
        <Icon type="arrowRight" className="carousel-button-icon" />
      )}
    </div>
  );
};

export default Button;
