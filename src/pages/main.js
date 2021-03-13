import React from 'react';
import styled from 'styled-components';
import {iphone11} from 'theme';

import Header from 'components/parts/Header';
import List from 'components/List';

const Main = () => {
    return (
        <Wrapper>
            <ViewContainer>
                <Header>
                    <Title>My Day</Title>
                    <SubTitle>March 13</SubTitle>
                    <EditIcon src="./img/edit.svg" />
                </Header>
                <List />
            </ViewContainer>
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    overflow: hidden;
`;

const ViewContainer = styled.div`
    ${iphone11.config};
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% - 20px);
    padding: 1rem;
    border-radius: 1rem;
    background-color: #ffffff;
`;

const Title = styled.h1`
    font-size: 34px;
`;
const SubTitle = styled.h4`
    font-size: 18px;
`;
const EditIcon = styled.img`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 7px;
    right: 0;
`;

const Section = styled.section``;
