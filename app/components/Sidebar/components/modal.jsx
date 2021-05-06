import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scatter from '../../../assets/img/scatter.png';
import anchor from '../../../assets/img/anchor.png';
import simpleos from '../../../assets/img/simpleos.png';
import lynx from '../../../assets/img/lynx.png';
import tockenpocket from '../../../assets/img/tockenpocket.png';
// import ledger from '../../../assets/img/ledger.png';

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

    @media screen and (max-width: 576px) {
        padding-top: 20px;
    }
`;

const ModalWrapper = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 80%;
    border: none;
    outline: none;

    @media screen and (max-width: 576px) {
        margin: 0;
        width: 100%;
    }
`;

const ModalHeader = styled.div`
    width: 100%;
    background-color: rgb(22, 32, 44);
    padding: 20px;
    display: grid;
    place-items: center;
    position: relative;
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

    @media screen and (max-width: 576px) {
        top: 12px;
        right: 12px;
    }
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
    padding: 20px 60px;
    gap: 20px;

    @media screen and (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        padding: 20px 0;
    }
`;

const Provider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
`;

const Text = styled.h1`
    font-size: 16px;
    font-family: sans-serif;
    color: #000;
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    list = [
        {
            key: 1,
            img: scatter,
            name: 'Scatter',
            index: 0,
        },
        {
            key: 2,
            img: anchor,
            name: 'Anchor',
            index: 1,
        },
        {
            key: 3,
            img: simpleos,
            name: 'SimplEOS',
            index: 2,
        },
        {
            key: 5,
            img: lynx,
            name: 'EOS lynx',
            index: 3,
        },
        {
            key: 4,
            img: tockenpocket,
            name: 'TokenPocket',
            index: 4,
        },
    ];

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
                                {this.list.map(item => (
                                    <Provider key={item.key} onClick={() => this.props.login(item.index)}>
                                        <Icon src={item.img} alt="scatter" />
                                        <Text>{item.name}</Text>
                                    </Provider>
                                ))}
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
    login: PropTypes.func.isRequired,
};

export default Modal;