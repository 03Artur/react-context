import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { withUser } from '../HOC/withUser';
import { withTheme } from '../HOC/withTheme';

export const COMMENT_DATE_FORMAT = 'yyyy MMM d HH:mm';

export const Comment = withUser(
  withTheme(
    ({ user, theme, author: { firstName, lastName }, body, timestamp }) => {
      return (
        <article>
          <header>
            {`${firstName} ${lastName}`}
          </header>
          <p>{body}</p>
          <footer>
            {format(timestamp, COMMENT_DATE_FORMAT)}
          </footer>
        </article>
      );
    },
  ),
);

Comment.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};
