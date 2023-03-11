/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from 'app/providers/ThemeProvider';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
import styles from './Modal.module.scss';

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

function Modal({
  children,
  className,
  isOpen,
  onClose,
}: ModalProps) {
  const { theme } = useTheme();
  const closehandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      closehandler();
    }
  }, [closehandler]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  function onContentClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closehandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
