import { Post } from './Post';
import { Component, Fragment } from 'react';
import { ThemeEnum } from '../contexts';
import { withTheme } from './HOC/withTheme';
import { withMouse } from './HOC/withMouse';

export const Content = withMouse(withTheme(
  class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [
          {
            id: 1,
            header: 'Post #1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto dolorem earum eum fuga ipsam iste, nihil obcaecati odio odit quod sapiente? Eius error laborum maiores nemo nostrum, optio possimus reiciendis rerum. Iste itaque quia quis saepe sint.',
            author: {
              firstName: 'Name',
              lastName: 'Surname',
            },
          },
          {
            id: 2,
            header: 'Post #2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto dolorem earum eum fuga ipsam iste, nihil obcaecati odio odit quod sapiente? Eius error laborum maiores nemo nostrum, optio possimus reiciendis rerum. Iste itaque quia quis saepe sint.',
            author: {
              firstName: 'Name',
              lastName: 'Surname',
            },
          },
          {
            id: 3,
            header: 'Post #3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto dolorem earum eum fuga ipsam iste, nihil obcaecati odio odit quod sapiente? Eius error laborum maiores nemo nostrum, optio possimus reiciendis rerum. Iste itaque quia quis saepe sint.',
            author: {
              firstName: 'Name',
              lastName: 'Surname',
            },
          },
          {
            id: 4,
            header: 'Post #4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid architecto dolorem earum eum fuga ipsam iste, nihil obcaecati odio odit quod sapiente? Eius error laborum maiores nemo nostrum, optio possimus reiciendis rerum. Iste itaque quia quis saepe sint.',
            author: {
              firstName: 'Name',
              lastName: 'Surname',
            },
          },
        ],
      };
    }

    render() {
      const { posts } = this.state;
      const { theme, mouse: { x, y } } = this.props;
      console.log(theme);
      return (
        <main style={
          {
            backgroundColor: theme === ThemeEnum.DARK ? 'gray' : 'transparent',
          }
        }>
          <h1>X = {x}; Y = {y}</h1>
          {
            posts.map((post, index, arr) => (
              <Fragment key={post.id}>
                <Post
                  title={post.header}
                  body={post.description}
                  author={post.author}
                />
                {index !== (arr.length - 1) && <hr />}
              </Fragment>
            ))
          }
        </main>
      );
    }
  },
  ),
);
