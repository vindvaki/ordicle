import React, { PropTypes } from 'react';

function App(props) {
  return (
    <div>
      <h1>App</h1>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
