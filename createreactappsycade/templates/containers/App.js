module.exports = (conditions) => {
  let hasRedux = conditions.indexOf('redux') >= 0 ? true : false;
  return(
`import * as React from 'react';
import Layout from '../../components/Layout';
${ hasRedux ?
`import store from '../../store';
import { Provider } from 'react-redux';
` : ``
}
class App extends React.Component {
  render() {
    ${ hasRedux ?`return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );
` :
`return (
    <Layout/>
 );`}
  }
}

export default App;
`
  );
}