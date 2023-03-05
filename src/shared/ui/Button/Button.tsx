import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  INVERTED_BACKGROUND = 'invertedBackground',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize
}

function Button({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      type="button"
      className={
        classNames(
          styles.button,
          { [styles.square]: square },
          [className, styles[theme], styles[size]],
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
