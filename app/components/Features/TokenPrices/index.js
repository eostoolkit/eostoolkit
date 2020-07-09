/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 09.07.2020
 * Version: 1.0
 */

import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import AttachMoney from "@material-ui/icons/AttachMoney";

import Tool from "components/Tool/Tool";
import ToolSection from "components/Tool/ToolSection";
import ToolBody from "components/Tool/ToolBody";

import { triggerFetchTokenList } from "containers/NetworkClient/actions";

import TokenPriceTable from "./TokenPriceTable";
import messages from "./messages";

class TokenPrices extends React.Component {
  componentDidMount() {
    this.props.triggerFetchTokenList();
  }

  render() {
    const { intl } = this.props;
    return (
      <Tool>
        <ToolSection md={12}>
          <ToolBody
            color="warning"
            icon={AttachMoney}
            header={intl.formatMessage(messages.toolBodyHeader)}
            subheader={intl.formatMessage(messages.toolBodySubHeader)}
          >
            <br />
            <p>
              <FormattedMessage {...messages.tokenPriceInfoText} />
            </p>
            <TokenPriceTable intl={intl} />
          </ToolBody>
        </ToolSection>
      </Tool>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    triggerFetchTokenList: () => dispatch(triggerFetchTokenList())
  };
}

export default connect(null, mapDispatchToProps)(TokenPrices);
