module.exports = (conditions) =>  {
  let hasBulma = conditions.indexOf('bulma') >= 0 ? true : false;
  return(
`import * as React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div ${ hasBulma ? 'className="hero is-primary"' : ''}>
        <div ${ hasBulma ? 'className="hero-body"' : ''}>
          <h1 ${ hasBulma ? 'className="title is-1"' : ''}>Home</h1>
        </div>
      </div>
    );
  }
}

export default Home;
`
  );
}