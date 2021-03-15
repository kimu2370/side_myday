import React, {useCallback} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';

import Layout from 'components/parts/Layout';
import Header from 'components/parts/Header';
import Chart from 'components/Chart';
import ScheduleList from 'components/ScheduleList';

const Main = () => {
    const history = useHistory();

    const moveToPage = useCallback(() => {
        history.push({
            pathname: '/register',
        });
    }, [history]);

    return (
        <Layout>
            <Header>
                <Title>My Day</Title>
                <SubTitle>March 13</SubTitle>
                <EditIcon onClick={moveToPage} src="./img/edit.svg" />
            </Header>
            <Chart />
            <ScheduleList />
        </Layout>
    );
};

export default Main;

const Title = styled.h1`
    font-size: 34px;
`;
const SubTitle = styled.h4`
    font-size: 18px;
`;
const EditIcon = styled.img`
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 7px;
    right: 0;
`;
