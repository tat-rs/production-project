import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.notFoundPage}>
      <h2 className={styles.title}>
        {t('Страница не найдена')}
      </h2>
    </div>
  );
}

export default NotFoundPage;
