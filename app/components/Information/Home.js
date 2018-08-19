import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h3>Getting started</h3>
      <h4>You must have <a href="https://get-scatter.com/" target="new">Scatter</a> installed to safely and securely send transactions to the EOS Network.</h4>
      <h4>Checkout our <a href="https://eoshelpdesk.zendesk.com" target="new">Zendesk</a> to find useful information and tutorials for EOSToolkit and the EOS Network.</h4>
      <h4>If you would like to ask us questions are participate in the GenerEOS Community, check out our <a href="https://t.me/generEOS" target="new">Telegram</a> group.</h4>
      <h4>Make sure you have read and understand the <NavLink to="/governance">EOS Governance</NavLink> prior to using the EOS Network.</h4>
    </div>
  );
};

export default Home;
