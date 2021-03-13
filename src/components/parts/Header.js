import React from 'react';
import styled from 'styled-components';

const Header = ({children, ...p}) => {
    return <Wrapper {...p}>{children}</Wrapper>;
};

export default Header;

const Wrapper = styled.header`
    position: relative;
`;
