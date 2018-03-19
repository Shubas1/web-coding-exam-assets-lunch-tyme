import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

ReactDOM.render(
  <ReduxApp />,
  document.getElementById('root')
);
registerServiceWorker();
