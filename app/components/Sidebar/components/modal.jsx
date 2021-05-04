import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed; 
    z-index: 1; 
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalWrapper = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 80%;
    border: none;
    outline: none;
`;

const ModalHeader = styled.div`
    width: 100%;
    background-color: #120a8f;
    padding: 20px;
    display: grid;
    place-items: center;
    position: relative;
`;

const ModalTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: sans-serif;
`;

const ModalContent = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 40px;
    gap: 20px;
`;

const Close = styled.div`
    color: #FFFFFFF;
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 28px;
    font-weight: bold;

    &:hover {
        text-decoration: none;
        cursor: pointer;
    }

    &:focus {
        text-decoration: none;
        cursor: pointer;
    }
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.isOpen && (
                    <Wrapper>
                        <ModalWrapper>
                            <ModalHeader>
                                <ModalTitle>Connect to Wallet</ModalTitle>
                                <Close onClick={this.props.onClose}>&times;</Close>
                            </ModalHeader>
                            <ModalContent>
                                <h1 style={{ color: '#3333' }}>1</h1>
                                <h1 style={{ color: '#3333' }}>2</h1>
                                <h1 style={{ color: '#3333' }}>3</h1>
                                <h1 style={{ color: '#3333' }}>4</h1>
                                <h1 style={{ color: '#3333' }}>5</h1>
                                <h1 style={{ color: '#3333' }}>6</h1>
                            </ModalContent>
                        </ModalWrapper>
                    </Wrapper>
                )}
            </div>
        )
    }
}

Modal.defaultProps = {
    isOpen: false,
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;