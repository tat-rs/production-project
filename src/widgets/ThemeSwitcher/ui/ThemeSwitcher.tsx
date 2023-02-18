import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-icon-light.svg';
import DarkIcon from 'shared/assets/icons/theme-icon-dark.svg';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';


function ThemeSwitcher() {

  const { theme, toggleTheme} = useTheme();

  return (
    <Button
      type='button'
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {
        theme === Theme.DARK ? <DarkIcon /> : <LightIcon />
      }
    </Button>
  );
}

export default ThemeSwitcher;