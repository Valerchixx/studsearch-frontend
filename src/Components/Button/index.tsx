import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './index.scss';
import RippleEffect from './RippleEffect';

const Button = ({
  children,
  className, style,
  href, target,
  outline, to, onClick
}: {
  children?: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  outline?: boolean
} & ({
  href?: never,
  target?: never,
  to: string,
  onClick?: (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => void
} | {
  href: string,
  target?: string,
  to?: never,
  onClick?: (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => void
} | {
  href?: never,
  target?: never,
  to?: never,
  onClick: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
})) => {
  if (to) {
    return (
      <Link
        component={React.forwardRef<HTMLAnchorElement>(({ children, className, href, navigate, style} : any, ref) => (
          <a ref={ref} href={href} target={target} style={style} className={className} onClick={onClick as any}>
            <RippleEffect />
            {children}
          </a>
        ))}
        className={cx('Button', { outline }, className)}
        style={style}
        to={to}
        children={children}
      />
    );
  } else if (href) {
    return (
      <a href={href} target={target} style={style} className={cx('Button', { outline }, className)} children={children} onClick={onClick as any} />
    )
  } else {
    return (
      <button
        className={cx('Button', { outline }, className)}
        style={style}
        onClick={onClick as any}
      >
        <RippleEffect />
        {children}
      </button>
    );
  }
}
export default Button;