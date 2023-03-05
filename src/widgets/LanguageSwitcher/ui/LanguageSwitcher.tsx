import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const languageChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={styles.switcher}
      theme={ButtonTheme.CLEAR}
      onClick={languageChange}
    >
      {t('Язык')}
    </Button>
  );
}

export default LanguageSwitcher;
