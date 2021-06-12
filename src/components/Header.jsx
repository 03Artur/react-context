import { ThemeButton } from './ThemeButton';
import { UserItem } from './UserItem';

export const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
    }}
    >
      <ThemeButton />
      <UserItem />
    </header>
  );
};
