import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// workaround, adds extra DOM level
const toParagraphs = (...nodes) => {
    let key = 0;
    const children = nodes.reduce((result, node) => (
        result.concat(
            typeof node === 'string'
                ? node
                    .split('\n')
                    .map(paragraph => <p key={++key}>{paragraph}</p>)
                : node
        )
    ), []);

    return <span>{children}</span>
};

const Governance = () => {
  return (
    <div>

      <h4>
        <FormattedMessage {...messages.governanceDefinitionsHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceDefinitionsText}>
            {toParagraphs}
        </FormattedMessage>
      </p>

      <h4>
        <FormattedMessage {...messages.governanceArticleOneHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleOneText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleTwoHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleTwoText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleThreeHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleThreeText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleFourHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleFourText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleFiveHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleFiveText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleSixHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleSixText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleSevenHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleSevenText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleEightHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleEightText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleNineHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleNineText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleTenHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleTenText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
      <h4>
        <FormattedMessage {...messages.governanceArticleElevenHeader} />
      </h4>
      <p>
        <FormattedMessage {...messages.governanceArticleElevelText}>
            {toParagraphs}
        </FormattedMessage>
      </p>
    </div>
  );
};

export default Governance;
