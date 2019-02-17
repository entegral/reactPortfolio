import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Header from './components/Header';

const render = (Component) => {
  ReactDOM.render(
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <AppContainer>
          <HashRouter>
            <Component />
          </HashRouter>
        </AppContainer>
      </main>
        
      <FooterBar/>
    </React.Fragment>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
