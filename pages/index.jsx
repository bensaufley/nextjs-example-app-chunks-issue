import React, { Component } from 'react';
import { connect } from 'react-redux';

import '@ducks/example';

class Index extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <>
        <h1>Welcome.</h1>
        <p>Counter: {this.props.counter}</p>
      </>
    );
  }
}

export default connect(({ example: { counter }}) => ({ counter }))(Index);
