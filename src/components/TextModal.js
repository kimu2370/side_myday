import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

import Modal from 'components/parts/Modal';
import {Backdrop, Fade} from '@material-ui/core';

const TextModal = ({open, clickedIndex, index, memo}) => {
    const [closeModal, setCloseModal] = useState(false);

    const handleCloseModal = useCallback(() => {
        setCloseModal(false);
    }, []);

    return (
        <Modal
            open={open || closeModal}
            onClose={() => setCloseModal(true)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box>
                    <CloseBtn onClick={handleCloseModal}>X</CloseBtn>
                    <div>{memo || ''}</div>
                </Box>
            </Fade>
        </Modal>
    );
};

export default TextModal;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const CloseBtn = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    :hover {
        opacity: 0.8;
    }
`;
