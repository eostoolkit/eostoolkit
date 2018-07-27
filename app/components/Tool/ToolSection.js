import React from 'react';
import GridItem from 'components/Grid/GridItem';

const ToolSection = props => {
  const {xs, sm, md, lg} = props;
  return (
    <GridItem xs={xs || 12} sm={sm || 12} md={md || lg || 6} lg={lg || md || 6}>
      {props.children}
    </GridItem>
  );
};

export default ToolSection;
