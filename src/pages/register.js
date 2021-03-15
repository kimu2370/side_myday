import React from 'react';
import styled from 'styled-components';

import Layout from 'components/parts/Layout';
import Header from 'components/parts/Header';

const Register = () => {
    return (
        <Layout>
            <Header>
                <Title>Log time</Title>
            </Header>
        </Layout>
    );
};

export default Register;

const Title = styled.h1`
    font-size: 34px;
`;
