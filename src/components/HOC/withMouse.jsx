import { Component } from 'react';

export function withMouse(WrappedComponent) {
  return class WithMouse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          x: 0,
          y: 0,
        },
      };
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (e) => {
      const { x, y } = e;
      this.setState({
        mouse: {
          x,
          y,
        },
      });
    };

    render() {
      const { mouse } = this.state;
      return <WrappedComponent {...this.props} mouse={mouse} />;
    }
  };
}
