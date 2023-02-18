import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница', {ns: 'main'})}
    </div>
  );
}

export default MainPage;