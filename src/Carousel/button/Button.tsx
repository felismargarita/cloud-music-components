import React from 'react';
import Icon from '@/Icon/index';
import classnames from 'classnames';
import {classNamePrefix} from '@/const/index'
interface ButtonProps {
  onClick?: () => void;
  placement: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, placement, className }) => {
  const classes = classnames(className, `${classNamePrefix}-carousel-button-container`);
  return (
    <div className={classes} onClick={() => onClick?.()}>
      {placement === 'left' ? (
        <Icon type="arrowLeft" className={`${classNamePrefix}-carousel-button-icon`} />
      ) : (
        <Icon type="arrowRight" className={`${classNamePrefix}-carousel-button-icon`} />
      )}
    </div>
  );
};

export default Button;
