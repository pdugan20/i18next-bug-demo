const withSourceMaps = require('@zeit/next-source-maps')();
const { i18n } = require('./next-i18next.config');

module.exports = withSourceMaps({
    i18n,
    images: {
        domains: ['firebasestorage.googleapis.com', 'googleapis.com'],
    },
});
