import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

function PageError() {
  const { t } = useTranslation();
  function refreshPage() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <div className={styles.pageError}>
      <h2>{t('Что-то пошло не так')}</h2>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={() => refreshPage()}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
}

export default PageError;
