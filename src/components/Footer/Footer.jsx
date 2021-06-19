import { ThemeEnum } from '../../contexts';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { withTheme } from '../HOC/withTheme';

export const Footer = withTheme(({ theme }) => {
  const footerClassName = classNames(styles.footer, {
    [styles.footerLight]: theme === ThemeEnum.LIGHT,
    [styles.footerDark]: theme === ThemeEnum.DARK,
  });

  return (
    <footer className={footerClassName}>

    </footer>
  );
});
