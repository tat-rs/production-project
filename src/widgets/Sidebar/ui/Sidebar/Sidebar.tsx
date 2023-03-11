import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={styles.toggle}
        type="button"
        onClick={() => onToggle()}
        theme={ButtonTheme.INVERTED_BACKGROUND}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={styles.link}
        >
          <MainPageIcon className={styles.icon} />
          <span className={styles.textLink}>{t('Главная страница', { ns: 'main' })}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={styles.link}
        >
          <AboutPageIcon className={styles.icon} />
          <span className={styles.textLink}>{t('О сайте', { ns: 'about' })}</span>
        </AppLink>
      </div>
      <div className={styles.switcher}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}

export default Sidebar;
