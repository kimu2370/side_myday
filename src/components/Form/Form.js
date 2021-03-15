import React from 'react';
import styled from 'styled-components';

import {color} from 'theme';

const Form = () => {
    return (
        <Container>
            <Time>
                <InputBox>
                    <Label>Start time</Label>
                    <Input />
                </InputBox>
                <InputBox>
                    <Label>End time</Label>
                    <Input />
                </InputBox>
            </Time>
            <InputBox>
                <Label>
                    <Img src="./img/test.svg" alt="" />
                    Content
                </Label>
                <Input />
            </InputBox>
            <InputBox>
                <Label>
                    <Img src="./img/test.svg" alt="" />
                    Category
                </Label>
                <Input />
            </InputBox>
            <InputBox>
                <Label>Memo</Label>
                <TextArea />
            </InputBox>
        </Container>
    );
};

export default Form;

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`;

const Time = styled.div`
    display: flex;
`;

const InputBox = styled.div`
    padding: 1rem;
`;

const Label = styled.label`
    color: ${color.basic};
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))`
    padding: 7px 7px 0 0;
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(196deg) brightness(0%) contrast(105%);
`;

const Input = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    border: none;
    outline: none;
    border-radius: 15px;
    margin-top: 5px;
    padding: 1rem;
    font-size: 16px;
    text-align: center;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 90px;
    border: none;
    outline: none;
    resize: none;
    border-radius: 15px;
    padding: 1rem;
`;
