import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyComponent extends React.Component {
  render() {
    throw new Error('I crashed!');
    return <h1>This will never be rendered.</h1>;
  }
}

const App = () => (
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>
);

export default App;
