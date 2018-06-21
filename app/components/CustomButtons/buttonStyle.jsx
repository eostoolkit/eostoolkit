// ##############################
// // // Button styles
// #############################

import {
  grayColor,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
} from 'assets/jss/material-dashboard-pro-react';

const buttonStyle = {
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: grayColor,
    color: '#FFFFFF',
    boxShadow:
      '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      backgroundColor: grayColor,
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
    },
    '& .fab,& .fas,& .far,& .fal': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      marginTop: '-1em',
      marginBottom: '-1em',
      fontSize: '1.1rem',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      width: '18px',
      height: '18px',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal': {
        marginTop: '0px',
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: '0px',
        top: '0px',
        height: '100%',
        lineHeight: '41px',
        fontSize: '20px',
      },
    },
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: primaryColor,
    boxShadow:
      '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: primaryColor,
      boxShadow:
        '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    },
  },
  info: {
    backgroundColor: infoColor,
    boxShadow:
      '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: infoColor,
      boxShadow:
        '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
    },
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: successColor,
      boxShadow:
        '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
    },
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: warningColor,
      boxShadow:
        '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
    },
  },
  danger: {
    backgroundColor: dangerColor,
    boxShadow:
      '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: dangerColor,
      boxShadow:
        '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
    },
  },
  rose: {
    backgroundColor: roseColor,
    boxShadow:
      '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: roseColor,
      boxShadow:
        '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
    },
  },
  white: {
    '&,&:focus,&:hover': {
      backgroundColor: '#FFFFFF',
      color: grayColor,
    },
  },
  twitter: {
    backgroundColor: '#55acee',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
    '&:hover,&:focus,&:visited': {
      backgroundColor: '#55acee',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)',
    },
  },
  facebook: {
    backgroundColor: '#3b5998',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#3b5998',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)',
    },
  },
  google: {
    backgroundColor: '#dd4b39',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#dd4b39',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)',
    },
  },
  linkedin: {
    backgroundColor: '#0976b4',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(9, 118, 180, 0.14), 0 3px 1px -2px rgba(9, 118, 180, 0.2), 0 1px 5px 0 rgba(9, 118, 180, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#0976b4',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(9, 118, 180, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(9, 118, 180, 0.2)',
    },
  },
  pinterest: {
    backgroundColor: '#cc2127',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#cc2127',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)',
    },
  },
  youtube: {
    backgroundColor: '#e52d27',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(229, 45, 39, 0.14), 0 3px 1px -2px rgba(229, 45, 39, 0.2), 0 1px 5px 0 rgba(229, 45, 39, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#e52d27',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(229, 45, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(229, 45, 39, 0.2)',
    },
  },
  tumblr: {
    backgroundColor: '#35465c',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(53, 70, 92, 0.14), 0 3px 1px -2px rgba(53, 70, 92, 0.2), 0 1px 5px 0 rgba(53, 70, 92, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#35465c',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(53, 70, 92, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(53, 70, 92, 0.2)',
    },
  },
  github: {
    backgroundColor: '#333333',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#333333',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)',
    },
  },
  behance: {
    backgroundColor: '#1769ff',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(23, 105, 255, 0.14), 0 3px 1px -2px rgba(23, 105, 255, 0.2), 0 1px 5px 0 rgba(23, 105, 255, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#1769ff',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(23, 105, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(23, 105, 255, 0.2)',
    },
  },
  dribbble: {
    backgroundColor: '#ea4c89',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(234, 76, 137, 0.14), 0 3px 1px -2px rgba(234, 76, 137, 0.2), 0 1px 5px 0 rgba(234, 76, 137, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#ea4c89',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(234, 76, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(234, 76, 137, 0.2)',
    },
  },
  reddit: {
    backgroundColor: '#ff4500',
    color: ' #fff',
    boxShadow:
      '0 2px 2px 0 rgba(255, 69, 0, 0.14), 0 3px 1px -2px rgba(255, 69, 0, 0.2), 0 1px 5px 0 rgba(255, 69, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#ff4500',
      color: ' #fff',
      boxShadow:
        '0 14px 26px -12px rgba(255, 69, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 69, 0, 0.2)',
    },
  },
  simple: {
    '&,&:focus,&:hover': {
      color: '#FFFFFF',
      background: 'transparent',
      boxShadow: 'none',
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: primaryColor,
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: infoColor,
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: successColor,
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: warningColor,
      },
    },
    '&$rose': {
      '&,&:focus,&:hover,&:visited': {
        color: roseColor,
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: dangerColor,
      },
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: '#55acee',
      },
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: '#3b5998',
      },
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: '#dd4b39',
      },
    },
    '&$linkedin': {
      '&,&:focus,&:hover,&:visited': {
        color: '#0976b4',
      },
    },
    '&$pinterest': {
      '&,&:focus,&:hover,&:visited': {
        color: '#cc2127',
      },
    },
    '&$youtube': {
      '&,&:focus,&:hover,&:visited': {
        color: '#e52d27',
      },
    },
    '&$tumblr': {
      '&,&:focus,&:hover,&:visited': {
        color: '#35465c',
      },
    },
    '&$github': {
      '&,&:focus,&:hover,&:visited': {
        color: '#333333',
      },
    },
    '&$behance': {
      '&,&:focus,&:hover,&:visited': {
        color: '#1769ff',
      },
    },
    '&$dribbble': {
      '&,&:focus,&:hover,&:visited': {
        color: '#ea4c89',
      },
    },
    '&$reddit': {
      '&,&:focus,&:hover,&:visited': {
        color: '#ff4500',
      },
    },
  },
  transparent: {
    '&,&:focus,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none',
  },
  lg: {
    padding: '1.125rem 2.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
  },
  sm: {
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: '1.5',
    borderRadius: '0.2rem',
  },
  round: {
    borderRadius: '30px',
  },
  block: {
    width: '100% !important',
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: '#999999',
      boxShadow: 'none',
    },
  },
  justIcon: {
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '20px',
    height: '41px',
    minWidth: '41px',
    width: '41px',
    '& .fab,& .fas,& .far,& .fal,& svg': {
      marginRight: '0px',
    },
    '&$lg': {
      height: '57px',
      minWidth: '57px',
      width: '57px',
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal': {
        fontSize: '32px',
        lineHeight: '56px',
      },
      '& svg': {
        width: '32px',
        height: '32px',
      },
    },
    '&$sm': {
      height: '30px',
      minWidth: '30px',
      width: '30px',
      '& .fab,& .fas,& .far,& .fal': {
        fontSize: '17px',
        lineHeight: '29px',
      },
      '& svg': {
        width: '17px',
        height: '17px',
      },
    },
  },
};

export default buttonStyle;
