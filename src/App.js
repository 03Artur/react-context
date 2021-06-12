import { Component } from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { ThemeEnum, ThemeContext, UserContext } from './contexts';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: ThemeEnum.DARK,
      user: {
        firstName: 'Test',
        lastName: 'Testovich',
      },
    };
  }

  setTheme = (value) => this.setState({
    theme: value,
  });

  render() {
    const { theme, user } = this.state;
    return (
      <UserContext.Provider value={{ user }}>
        <ThemeContext.Provider value={{
          theme,
          setTheme: this.setTheme,
        }}>
          <section style={{
            width: '100vw',
            minHeight: '100vh',
          }}>
            <Header />
            <Content />
          </section>
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
