import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const Section1 = () => {
  return <h1>Section 1</h1>;
};

const Section2 = () => {
  throw new Error('Something went wrong in Section 2');
  return <h1>Section 2</h1>;
};

const App = () => (
  <div>
    <ErrorBoundary>
      <Section1 />
    </ErrorBoundary>
    <ErrorBoundary>
      <Section2 />
    </ErrorBoundary>
  </div>
);

export default App;
