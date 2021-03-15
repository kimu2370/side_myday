import React from 'react';
import styled from 'styled-components';

import Layout from 'components/parts/Layout';
import Header from 'components/parts/Header';
import Form from 'components/Form';

const Register = () => {
    return (
        <Layout>
            <Header>
                <Title>Log time</Title>
                <Form />
            </Header>
        </Layout>
    );
};

export default Register;

const Title = styled.h1`
    font-size: 34px;
`;
