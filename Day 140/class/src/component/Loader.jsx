import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return <h1>{this.state.loading ? 'Loading...' : 'Data Loaded'}</h1>;
  }
}

export default Loader;
