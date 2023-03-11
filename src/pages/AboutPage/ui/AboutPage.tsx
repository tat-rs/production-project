import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('О сайте', { ns: 'about' })}
    </div>
  );
}

export default AboutPage;
