import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <AppLink
        to={RoutePath.main}
        theme={AppLinkTheme.SECONDARY}
      >
        {t('Главная страница')}
      </AppLink>
      <AppLink
        to={RoutePath.about}
        theme={AppLinkTheme.SECONDARY}
      >
        {t('О сайте')}
      </AppLink>
    </nav>
  );
}
