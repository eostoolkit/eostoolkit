import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 200px;
  color: #000;
`;

const NetworksSelect = () => {
    
  return (
    <Container>
      <Select>
        <option>EOS</option>
        <option>TELOS</option>
        <option>JUNGLE</option>
        <option>XEC</option>
      </Select>
    </Container>
  );
};

export default NetworksSelect;
