import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Disclaimer from 'components/Disclaimer'

const DefaultSubmit = props => {
  const { xs, sm, md, lg, submitColor, submitText, extraButtons } = props;
  return (
    <React.Fragment>
      <GridItem  xs={xs || 12} sm={sm || 12} md={md || lg || 6} lg={lg || md || 6}>
        <Button type="submit" color={submitColor || "rose"}>
          {submitText || "Submit"}
        </Button>
        {extraButtons ? <props.extraButtons /> : ('')}
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Disclaimer/>
      </GridItem>
    </React.Fragment>
  );
};

const ToolForm = props => {
  const { handleSubmit, customSubmit, ...submitProps } = props;
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        {props.children}
        {customSubmit ? <props.customSubmit/> : <DefaultSubmit {...submitProps}/>}
      </GridContainer>
    </form>
  );
};

export default ToolForm;
