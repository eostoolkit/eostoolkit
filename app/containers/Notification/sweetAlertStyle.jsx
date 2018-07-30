// ##############################
// // // SweetAlert view styles
// #############################

import buttonStyle from 'components/CustomButtons/buttonStyle';

const sweetAlertStyle = {
  cardTitle: {
    marginTop: '0',
    marginBottom: '3px',
    color: '#3C4858',
    fontSize: '18px',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  preXYScrollable: {
    textAlign: 'left',
    overflow: 'auto',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre',
    maxHeight: '150px',
  },
  ...buttonStyle,
};

export default sweetAlertStyle;
