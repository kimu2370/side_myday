import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ListBox from './ListBox';
import axios from 'axios';

const LOCAL_HOST = process.env.REACT_APP_LOCAL_HOST;

const ScheduleList = () => {
    const [data, setData] = useState({
        morning: [],
        dayTime: [],
        evening: [],
        night: [],
    });

    useEffect(() => {
        axios.get('./data.json' || `${LOCAL_HOST}/schedule/1`).then(res => {
            setData(res.data);
        });
    }, []);

    return (
        <Wrapper>
            {data.night.length > 0 && <ListBox title="Night" list={data.night} />}
            {data.morning.length > 0 && <ListBox title="Morning" list={data.morning} />}
            {data.dayTime.length > 0 && <ListBox title="Day time" list={data.dayTime} />}
            {data.evening.length > 0 && <ListBox title="Evening" list={data.evening} />}
        </Wrapper>
    );
};

export default ScheduleList;

const Wrapper = styled.div`
    max-height: 800px;
    overflow-y: overlay;
`;
