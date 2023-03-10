import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

export interface LanguageSwitcherProps {
  className?: string,
  short?: boolean
}

function LanguageSwitcher({ className, short }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const languageChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.switcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={languageChange}
    >
      {t(short ? 'Язык сокращено' : 'Язык')}
    </Button>
  );
}

export default LanguageSwitcher;
