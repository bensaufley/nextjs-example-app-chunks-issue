import React from 'react';
import { default as App, Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

import makeStore from '@ducks/makeStore';
import '@ducks/reducerRegistry';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
