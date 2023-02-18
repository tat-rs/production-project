import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [])}>
      <button
        className={styles.toggle}
        type='button'
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;