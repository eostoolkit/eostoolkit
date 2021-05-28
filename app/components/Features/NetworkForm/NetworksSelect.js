import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Eos from '../../../assets/img/blockchains/EOS-icon.png';
import Telos from '../../../assets/img/blockchains/telos-icon.png';
import Jungle from '../../../assets/img/blockchains/jungle-icon.png';
import Proton from '../../../assets/img/blockchains/proton-icon.png';
import Xec from '../../../assets/img/blockchains/xec-icon.png';
import Bos from '../../../assets/img/blockchains/Bos-icon.png';
import Wax from '../../../assets/img/blockchains/Wax-icon.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SelectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  row-gap: 16px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const OptionImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Select = styled.div`
  width: 200px;
  color: #000;
`;

class NetworksSelect extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line no-undef
  coins = [
    {
      id: 1,
      name: 'EOS',
      asset: Eos,
      endpoint: {
        url: 'eos.greymass.com',
        port: 403,
        protocol: 'https',
      },
      network: {
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      },
    },
    {
      id: 2,
      name: 'TELOS',
      asset: Telos,
      api: {
        url: 'telos.greymass.com',
        port: 403,
        protocol: 'https',
        chainId: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
      },
    },
    {
      id: 3,
      name: 'Jungle',
      asset: Jungle,
      api: {
        url: 'api.jungle3.alohaeos.com',
        port: 403,
        protocol: 'https',
        chainId: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
      },
    },
    {
      id: 4,
      name: 'Proton',
      asset: Proton,
      api: {
        url: 'proton.cryptolions.io',
        port: 403,
        protocol: 'https',
        chainId: '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
      },
    },
    {
      id: 5,
      name: 'Xec',
      asset: Xec,
      api: {
        url: 'api.europechain.io',
        port: 403,
        protocol: 'https',
        chainId: 'f778f7d2f124b110e0a71245b310c1d0ac1a0edd21f131c5ecb2e2bc03e8fe2e',
      },
    },
    {
      id: 6,
      name: 'Bos',
      asset: Bos,
      api: {
        url: 'api.bossweden.org',
        port: 403,
        protocol: 'https',
        chainId: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86',
      },
    },
    {
      id: 7,
      name: 'WAX',
      asset: Wax,
      api: {
        url: 'https://wax.greymass.com',
        port: 403,
        protocol: 'https',
        chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
      },
    },
  ];

  handleChangeNetwork(api) {
    localStorage.clear();
    this.props.selectNetwork(api);
  }

  render() {
    return (
      <Wrapper>
        <Select>
          <SelectContent>
            {this.coins.map(coin => (
              <Option key={coin.id} onClick={() => this.handleChangeNetwork(coin.api)}>
                <OptionImage src={coin.asset} alt="asset" />
                {coin.name}
              </Option>
            ))}
          </SelectContent>
        </Select>
      </Wrapper>
    );
  }
}

NetworksSelect.propTypes = {
  selectNetwork: PropTypes.func.isRequired,
};

export default NetworksSelect;
