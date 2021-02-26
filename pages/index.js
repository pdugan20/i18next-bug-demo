import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Homepage = () => {
    const { t } = useTranslation('common');
    return <RootView>{t('test')}</RootView>;
};

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Homepage;

const RootView = styled.div`
    width: 100%;
    text-align: center;
    overflow: hidden;
`;
