import React from 'react';
import Card from './card/Card';
import Dots from './dots/Dots';
import Button from './button/Button';
import classnames from 'classnames';
import {classNamePrefix} from '@/const/index'

interface CarouselProps {
  /**
   * @description text:卡片右下角标识文字,img:图片url
   */
  cards: Array<{ text: string; img: string }>;
  /**
   * 用户自定义className
   */
  className?: string

  /**
   * @description 用户点击最中间的卡片时的回到,index:卡片索引值
   */
  onClickFrontCard?:(index:number)=>void

  /**
   *@description 卡片自动切换时间,单位ms
   *@default 4000(ms)
   */
  interval?:number

  /**
   * @default true
   * @description 是否自动轮播
   */
  autoPlay?:boolean

  /**
   * @default true
   * @description 是否显示小圆点
   */
  dots?:boolean

  /**
   * @default true
   * @description 是否显示手动切换按钮
   */
   buttons?:boolean
}
const Carousel: React.FC<CarouselProps> = ({ cards,className,onClickFrontCard,interval,buttons,dots,autoPlay }) => {
  const [current, setCurrent] = React.useState(0); //当前卡片索引值
  const [isHover, setHover] = React.useState(false); //鼠标是否hover到跑马灯上
  const useHoverRef = React.useRef(false);
  const countRef = React.useRef(0);
  const intervalPlayRef = React.useRef<any>()
  countRef.current = current;
  useHoverRef.current = isHover;
  
  const getClasses = (index: number) => {
    const isLeft =
      index === current - 1 || (current === 0 && index === cards.length - 1);
    const isRight =
      index === current + 1 || (current === cards.length - 1 && index === 0);
    const isCurrent = current === index;
    return classnames(`${classNamePrefix}-carousel-card-size`,className, {
      [`${classNamePrefix}-carousel-card-dock`]: !(isLeft || isRight || isCurrent),
      [`${classNamePrefix}-carousel-card-middle`]: isCurrent,
      [`${classNamePrefix}-carousel-card-left`]: isLeft,
      [`${classNamePrefix}-carousel-card-right`]: isRight,
    });
  };
  if (cards.length < 3) {
    throw new Error('走马灯元素不得少于3个');
  }

  const step = (directon: 1 | -1, source: 'manual' | 'auto') => {
    if (useHoverRef.current && source === 'auto') {
      return;
    }
    if (directon === 1) {
      if (countRef.current === cards.length - 1) {
        setCurrent(0);
      } else {
        setCurrent((current) => current + 1);
      }
    }
    if (directon === -1) {
      if (countRef.current === 0) {
        setCurrent(cards.length - 1);
      } else {
        setCurrent((current) => current - 1);
      }
    }
  };

  //设置定时滚动,滚动间隔4s
  React.useEffect(() => {
    if(!autoPlay){
      return
    }
    clearInterval(intervalPlayRef.current)
    const timer = setInterval(() => {
      step(1, 'auto');
    }, interval);
    intervalPlayRef.current = timer
    return () => clearInterval(timer);
  }, [autoPlay]);


  const onHandleClick = (index:number)=>{
    if(index === current){
      onClickFrontCard?.(index)
    }
  }

  return (
    <div
      className={`${classNamePrefix}-carousel-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <div className={`${classNamePrefix}-carousel-cards`}>
      {cards.map((card, index) => (
        <Card onClick={()=>onHandleClick(index)} key={index} text={card.text} className={getClasses(index)}>
          <img src={card.img} />
        </Card>
      ))}
      {(isHover && buttons) ? (
        <Button
          placement="left"
          className={`${classNamePrefix}-carousel-button-left`}
          onClick={() => step(-1, 'manual')}
        />
      ) : null}
      {(isHover && buttons) ? (
        <Button
          placement="right"
          className={`${classNamePrefix}-carousel-button-right`}
          onClick={() => step(1, 'manual')}
        />
      ) : null}
      </div>
      {
        dots 
        ?
        <div className={`${classNamePrefix}-carousel-bottom-dots`}>
          <Dots
            count={cards.length}
            current={current}
            onChange={(i) => setCurrent(i)}
          />
        </div>
        :
        null
      }
    </div>
  );
};

Carousel.defaultProps = {
  interval: 4000,
  dots: true,
  buttons: true,
  autoPlay: true
}

export default Carousel;
