import * as React from 'react';
import Layout from '../../components/Layout';
import store from '../../store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );

  }
}

export default App;
