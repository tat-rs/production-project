import { ButtonError } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <ButtonError />
      {t('Главная страница', { ns: 'main' })}
    </div>
  );
}

export default MainPage;
