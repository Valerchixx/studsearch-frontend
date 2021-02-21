import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './index.scss';
import RippleEffect from './RippleEffect';

const Button = ({
  children,
  className, style,
  outline, to, onClick
}: {
  children?: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  outline?: boolean
} & ({
  to: string,
  onClick?: never
} | {
  to?: never,
  onClick: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
})) => {
  if (to) {
    return (
      <Link
        component={React.forwardRef((props, ref) => (
          <a ref={ref} style={style} {...props}>
            <RippleEffect />
            {props.children}
          </a>
        ))}
        className={cx('Button', { outline }, className)}
        style={style}
        to={to}
        children={children}
      />
    );
  }
  return (
    <button
      className={cx('Button', { outline }, className)}
      style={style}
      onClick={onClick}
    >
      <RippleEffect />
      {children}
    </button>
  );
}
export default Button;