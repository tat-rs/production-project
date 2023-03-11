/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuth((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.INVERTED_BACKGROUND}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuth} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque libero aperiam nesciunt, magnam obcaecati quis sunt natus, mollitia soluta veniam, minus dolor pariatur culpa sit numquam ipsum voluptatum aliquid repudiandae in quos? Quae amet repellendus ipsa beatae nostrum in odit deleniti blanditiis eaque harum. Harum dolorum non nostrum saepe alias?
      </Modal>
    </nav>
  );
}
