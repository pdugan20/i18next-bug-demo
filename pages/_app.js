import App from 'next/app';
import React from 'react';
import { appWithTranslation } from 'next-i18next';

class HikeAround extends App {
    render() {
        const { Component, pageProps, err } = this.props;
        return <Component {...pageProps} err={err} />;
    }
}

export default appWithTranslation(HikeAround);
