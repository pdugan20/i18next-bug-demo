import React from 'react';
import PropTypes from 'prop-types';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentsSheet } from 'styled-components';
import { ServerStyleSheets as MaterialUiSheets } from '@material-ui/core/styles';

const propTypes = {
    lang: PropTypes.string,
};

const defaultProps = {
    lang: 'en',
};

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentsSheet = new StyledComponentsSheet();
        const materialUiSheets = new MaterialUiSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentsSheet.collectStyles(
                            materialUiSheets.collect(<App {...props} />),
                        ),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: [
                    <React.Fragment key='styles'>
                        {initialProps.styles}
                        {materialUiSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </React.Fragment>,
                ],
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        const { lang } = this.props;

        return (
            <Html lang={lang}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        );
    }
}

MyDocument.propTypes = propTypes;
MyDocument.defaultProps = defaultProps;

export default MyDocument;
