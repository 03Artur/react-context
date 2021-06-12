import PropTypes from 'prop-types';
import { ThemeContext, ThemeEnum } from '../contexts';

export const Post = (props) => {
  const { title, body, author } = props;

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <article style={{
            color: theme === ThemeEnum.DARK ? 'white' : 'black',
            backgroundColor: theme === ThemeEnum.DARK ? 'black' : 'transparent',
          }}>
            <h2>{title}</h2>
            <p>{body}</p>
            <footer>
              <span>{`${author.firstName} ${author.lastName}`}</span>
            </footer>
          </article>

        )
      }
    </ThemeContext.Consumer>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};
