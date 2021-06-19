import classNames from 'classnames';
import { ThemeEnum } from '../../contexts';
import styles from './UserItem.module.css';
import { withUser } from '../HOC/withUser';
import { withTheme } from '../HOC/withTheme';

const UserItem = ({ theme, user: { firstName, lastName } }) => {
  const containerClassName = classNames(styles.container, {
    [styles.containerDark]: theme === ThemeEnum.DARK,
    [styles.containerLight]: theme === ThemeEnum.LIGHT,
  });

  return (
    <article className={containerClassName}>
      <div style={{
        height: 50,
        width: 50,
        borderRadius: '100%',
        backgroundColor: 'gray',
      }} />
      <span>{`${firstName} ${lastName}`}</span>
    </article>
  );
};

export default withTheme(withUser(UserItem));
