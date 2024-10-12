import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, loading: false }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { loading, users } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default DataFetcher;
