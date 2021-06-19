import { ThemeEnum } from '../contexts';
import { withTheme } from './HOC/withTheme';

export const ThemeButton = withTheme(
  ({ theme, setTheme }) => (
    <button
      onClick={() => setTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT)}
    >
      SWITCH TO {theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT}
    </button>
  ),
);
