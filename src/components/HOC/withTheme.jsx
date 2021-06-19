import { ThemeContext } from '../../contexts';

export const withTheme = (WrappedComponent) => {
  const NewComponent = (props) => (
    <ThemeContext.Consumer>
      {
        ({ theme, setTheme }) => <WrappedComponent {...props} theme={theme} setTheme={setTheme} />
      }
    </ThemeContext.Consumer>
  );

  NewComponent.displayName = 'WithTheme';

  return NewComponent;
};
