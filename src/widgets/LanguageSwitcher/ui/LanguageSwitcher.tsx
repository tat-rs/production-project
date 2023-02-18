import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  function languageChange() {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={styles.switcher}
      theme={ThemeButton.CLEAR}
      onClick={languageChange}
    >
      {t('Язык')}
    </Button>
  );
}

export default LanguageSwitcher;