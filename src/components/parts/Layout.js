import React from 'react';
import styled from 'styled-components';
import {iphone11} from 'theme';

const Layout = ({children}) => {
    return (
        <Wrapper>
            <ViewContainer>{children}</ViewContainer>
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    overflow: hidden;
`;

const ViewContainer = styled.div`
    ${iphone11.config};
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% - 20px);
    padding: 1rem;
    border-radius: 1rem;
    background-color: #ffffff;
`;
