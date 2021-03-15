import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import moment from 'moment';

import TextModal from 'components/TextModal';

const ListBox = ({title, list}) => {
    const [memo, setMemo] = useState('');
    const [open, setOpen] = useState(false);
    const modalHandler = useCallback(item => {
        setOpen(true);
        setMemo(item.memo);
        // console.log(item.memo);
    }, []);

    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>
                {list.map((item, index) => (
                    <ItemBox key={index}>
                        <Img src="./img/test.svg" alt="" />
                        <ContentBox>
                            <Time>{`${moment(item.start_time).format('HH:mm')} - ${moment(
                                item.end_time
                            ).format('HH:mm')}`}</Time>
                            <Text onClick={() => modalHandler(item)}>{item.content}</Text>
                        </ContentBox>
                    </ItemBox>
                ))}
                <TextModal open={open} setOpen={setOpen} memo={memo || ''} />
            </Wrapper>
        </Container>
    );
};

export default ListBox;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    margin: 25px 5px;
    padding: 0 32px 0 22px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    font-size: 24px;
    padding: 9px 0;
`;

const ItemBox = styled.div`
    display: flex;
    padding: 7px 0;
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))`
    padding: 7px 10px 0 0;
`;

const ContentBox = styled.div`
    width: 100%;
`;

const Time = styled.div`
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: #007aff;
    padding: 0 10px;
`;

const Text = styled.div`
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 6px 10px 5px 10px;
    width: 100%;
    :hover {
        transition: all 250ms ease;
        transform: scale(1.02);
        background: rgba(0, 0, 0, 0.1);
    }
`;
