import React from 'react';

import eosbotBanner from '../../assets/img/eosbot-banner.png';

const bannerBackground = {
  margin: '30px 0',
  padding: '16px',
  background: '#182032',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14);',
  width: '100%;',
  display: 'flex;',
  borderRadius: 6,
  height: '100%',
  maxHeight: '246px',
};

const bannerImage = {
  maxheight: '197px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '405px',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
};

function Banner() {
  return (
    <a target="_blank" href="https://www.eosminerbot.io?ref=eostoolkitmb">
      <div style={bannerBackground}>
        <img style={bannerImage} src={eosbotBanner} alt="eosbot-banner" />
      </div>
    </a>
  );
}

export default Banner;
