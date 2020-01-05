import { CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            html,
            body {
              /* gray.900 */
              background-color: #171923;
              color: white;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
