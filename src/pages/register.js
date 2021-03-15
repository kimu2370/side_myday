import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

import Layout from "components/parts/Layout";
import Header from "components/parts/Header";
import Form from "components/Form";

const Register = () => {
    const history = useHistory();
    const handleClick = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <Layout>
            <Img onClick={handleClick} />
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
    margin-top: 10px;
    margin-bottom: 25px;
`;

const Img = styled.img.attrs(() => ({
    src: "./img/back.svg",
    alt: "image",
}))`
    cursor: pointer;
`;
