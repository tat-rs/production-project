import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [])}>
      <button
        data-testid='sidebar-toggle'
        className={styles.toggle}
        type="button"
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
