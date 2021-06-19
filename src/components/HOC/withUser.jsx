import { UserContext } from '../../contexts';

export const withUser = (WrappedComponent) => {
  const NewComponent = (props) => (
    <UserContext.Consumer>
      {({ user }) => <WrappedComponent {...props} user={user} />}
    </UserContext.Consumer>
  );
  NewComponent.displayName = 'WithUser';

  return NewComponent;
};
