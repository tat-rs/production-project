import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

function Button({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
