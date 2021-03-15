import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

import Modal from 'components/parts/Modal';
import {Backdrop, Fade} from '@material-ui/core';

const TextModal = ({open, setOpen, memo}) => {
    const handleCloseModal = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box>
                    <TextBox>{memo || ''}</TextBox>
                    <CloseBtn onClick={handleCloseModal}>X</CloseBtn>
                </Box>
            </Fade>
        </Modal>
    );
};

export default TextModal;

const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    background-color: #ffffff;
    max-width: 372px;
    width: 100%;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    :hover {
        opacity: 0.8;
    }
`;

const TextBox = styled.div`
    /* font-size: 1.5rem; */
    padding: 2rem;
`;
