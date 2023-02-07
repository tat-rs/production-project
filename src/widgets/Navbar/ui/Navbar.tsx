import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({className}: NavbarProps) {
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <AppLink
        to='/'
        theme={AppLinkTheme.SECONDARY}
      >
        Главная
      </AppLink>
      <AppLink
        to='/about'
        theme={AppLinkTheme.SECONDARY}
        >
        About
      </AppLink>
    </nav>
  );
}