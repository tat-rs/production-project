import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { classNames } from '../../lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => function (story: () => Story) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={classNames('app', {}, [theme])}>
        {story()}
      </div>
    </ThemeProvider>

  );
};
