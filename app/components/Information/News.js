import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const News = () => {
  return (
    <div>
      <h3>Happy first birthday EOS !!!</h3>
      <h4>
        Team GenerEOS has compiled a birthday video message from the EOS community - for the EOS community.
        We received so many amazing video submissions from around the world and it was fun putting it all together.
        Now watch for yourself!  <a href="https://twitter.com/GenerEOSAus/status/1134685685216993280" target="new">
          [Twitter announcement]
        </a><br/>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nqSSZ_cftj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </h4>


      <h3>Thank you contributers !!!!</h3>
      <h4>
        The eostoolkit was the first open source tool built by the community - for the community.
        GenerEOS has started this project and has built a huge chunk of it, but it would not be what it is without all our
        contributers, who generously devoted time to this project. <br/>
        <span style={{fontWeight: 'bold'}}>Thank you: Nathan Rempel, Ralf Weinand, Andre Litty, Quentin Dejean, Andy Meek, Denis Carriere,
        Prokhor Borisov, Jimmy, Biteos, eosdacvietnam, manikey123, kesar, and many more who worked on the sidelines...</span><br/>
        <br/>
        Also thanks to you (yes, you!) for using the toolkit and for your help making it a success and one of the most used EOS tools out there! <br/>
        <br/>
        The eostoolkit is and stays open source, so feel free to contribute. We welcome every single pull request.
        Here is the source code. Go for it! <a href="https://github.com/eostoolkit" target="new">
          [eostoolkit repository on github]
        </a>
      </h4>

      <h3>
        <FormattedMessage {...messages.multiChainHeader} />
      </h3>
      <h4>
        <FormattedMessage {...messages.multiChain1} />
        <a href="/networks" target="_self">
          [Change Network]
        </a>
        <FormattedMessage {...messages.multiChain2} />
      </h4>
      <h6 color="grey">
        <FormattedMessage {...messages.multiChain3} />
        <a href="https://github.com/eostoolkit/eos-networks/blob/master/networks.json" target="new">
          here
        </a>
      </h6>
    </div>
  );
};

export default withStyles(withStyles)(News);
