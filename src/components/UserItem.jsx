import { ThemeContext, ThemeEnum, UserContext } from '../contexts';

export const UserItem = () => {
  return (
    <UserContext.Consumer>
      {
        ({ user: { firstName, lastName } }) => (
          <ThemeContext.Consumer>
            {
              ({ theme }) => (
                <article style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: theme === ThemeEnum.DARK ? 'white' : 'black',
                  backgroundColor: theme === ThemeEnum.DARK ? 'black' : 'transparent',

                }}>
                  <div style={{
                    height: 50,
                    width: 50,
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                  }} />
                  <span

                  >{`${firstName} ${lastName}`}
                    </span>
                </article>)
            }
          </ThemeContext.Consumer>
        )
      }
    </UserContext.Consumer>
  );
};
