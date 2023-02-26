import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

function ButtonError() {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={() => setError(true)}>
      {t('Ошибка')}
    </Button>
  );
}

export default ButtonError;
