import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from '../../lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => function (story: () => Story) {
  return (
    <div className={classNames('app', {}, [theme])}>
      {story()}
    </div>
  );
};
