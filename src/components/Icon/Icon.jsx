import React from 'react';
import { styles, css } from './styles.js';

export class ChatIcons extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <svg
        className="defs-only"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'none' }}
      >
        <symbol id="logo">
          <path
            d="M17.681,1.368 L18.626,2.226 L6.694,9.038 L0.918,5.713 L1.458,4.64 L6.694,7.617 L17.681,1.367 L17.681,1.368 Z M15.279,-1.77635684e-15 L16.547,0.644 L6.694,6.276 L2.106,3.674 L2.888,2.736 L6.694,4.908 L15.28,-1.77635684e-15 L15.279,-1.77635684e-15 Z M19.463,3.111 L20.164,4.05 L6.694,11.747 L0.189,8.046 L0.486,6.866 L6.694,10.406 L19.463,3.111 Z M21.406,6.571 C21.802,7.68 22,8.841 22,10.057 C22,11.273 21.802,12.454 21.406,13.597 L21.136,14.322 C20.5815714,15.6224341 19.7847301,16.8054787 18.788,17.808 C17.7794386,18.7982876 16.5871005,19.5819696 15.278,20.115 C13.893,20.705 12.463,21 10.987,21 C9.493,21 8.062,20.705 6.694,20.115 C5.40051043,19.5682136 4.21982283,18.7859487 3.212,17.808 C2.20382676,16.8149277 1.40537166,15.6294871 0.864,14.322 C0.294,12.972 -0.001,11.522 -1.11022302e-15,10.057 L-1.11022302e-15,9.333 L6.694,13.115 L20.812,5.069 L21.406,6.571 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </symbol>
        <symbol id="logo2">
          <g fill="none" fillRule="evenodd">
            <circle
              cx="16"
              cy="16"
              r="16"
              fill="currentColor"
              fillRule="nonzero"
            />
            <path
              fill="#FFF"
              d="M22.681 7.368l.945.858-11.932 6.812-5.776-3.325.54-1.073 5.236 2.977 10.987-6.25zM20.279 6l1.268.644-9.853 5.632-4.588-2.602.782-.938 3.806 2.172L20.28 6zm4.184 3.111l.701.939-13.47 7.697-6.505-3.701.297-1.18 6.208 3.54 12.769-7.295zm1.943 3.46c.396 1.109.594 2.27.594 3.486 0 1.216-.198 2.397-.594 3.54l-.27.725a11.142 11.142 0 0 1-2.348 3.486 10.85 10.85 0 0 1-3.51 2.307c-1.385.59-2.815.885-4.291.885-1.494 0-2.925-.295-4.293-.885a11.341 11.341 0 0 1-3.482-2.307 10.568 10.568 0 0 1-2.348-3.486c-.57-1.35-.865-2.8-.864-4.265v-.724l6.694 3.782 14.118-8.046.594 1.502z"
            />
          </g>
        </symbol>
        <symbol id="send">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle
              id="Oval"
              fill="currentColor"
              cx="12.5"
              cy="12.5"
              r="12.5"
            />
            <path
              d="M12.5,6.41176471 L12.5,19.5882353"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M12.375,6.11764706 L15.4530942,11.2679224"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M9.54690577,6.11764706 L12.625,11.2679224"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              transform="translate(11.085953, 8.692785) scale(-1, 1) translate(-11.085953, -8.692785) "
            />
          </g>
        </symbol>
        <symbol id="statusWait">
          <path
            d="M6,10 C8.209139,10 10,8.209139 10,6 C10,3.790861 8.209139,2 6,2 C3.790861,2 2,3.790861 2,6 C2,8.209139 3.790861,10 6,10 Z M6,11 C3.23857625,11 1,8.76142375 1,6 C1,3.23857625 3.23857625,1 6,1 C8.76142375,1 11,3.23857625 11,6 C11,8.76142375 8.76142375,11 6,11 Z M8.52505993,7.51498474 L6.23684082,6.12023522 L6.23684082,3.46264648 L5.53684082,3.46264648 L5.53684082,6.51334798 L8.16073109,8.11270081 L8.52505993,7.51498474 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </symbol>
        <symbol id="statusSend">
          <g fill="currentColor">
            <path
              d="M3.15744835,4.53582863 L6.5515609,1.14171608 C6.78587547,0.907401505 7.16577446,0.907401505 7.40008904,1.14171608 L7.40008904,1.14171608 C7.63440361,1.37603066 7.63440361,1.75592964 7.40008904,1.99024422 L4.00597649,5.38435677 L3.15744835,4.53582863 Z"
              id="Rectangle"
            />
            <path
              d="M1.99411255,3.14426529 L4.11543289,5.26558563 L3.26690476,6.11411377 L1.14558441,3.99279343 C0.911269837,3.75847885 0.911269837,3.37857986 1.14558441,3.14426529 L1.14558441,3.14426529 C1.37989899,2.90995071 1.75979797,2.90995071 1.99411255,3.14426529 Z"
              id="Rectangle"
            />
          </g>
        </symbol>
        <symbol id="statusError">
          <path
            d="M6,7.5 L6,7.5 C6.27614237,7.5 6.5,7.72385763 6.5,8 L6.5,8 C6.5,8.27614237 6.27614237,8.5 6,8.5 L6,8.5 C5.72385763,8.5 5.5,8.27614237 5.5,8 L5.5,8 C5.5,7.72385763 5.72385763,7.5 6,7.5 Z M6,3.5 L6,3.5 C6.27614237,3.5 6.5,3.72385763 6.5,4 L6.5,6 C6.5,6.27614237 6.27614237,6.5 6,6.5 L6,6.5 C5.72385763,6.5 5.5,6.27614237 5.5,6 L5.5,4 C5.5,3.72385763 5.72385763,3.5 6,3.5 Z M5.995,1 C3.235,1 1,3.24 1,6 C1,8.76 3.235,11 5.995,11 C8.76,11 11,8.76 11,6 C11,3.24 8.76,1 5.995,1 Z M6,10 C3.79,10 2,8.21 2,6 C2,3.79 3.79,2 6,2 C8.21,2 10,3.79 10,6 C10,8.21 8.21,10 6,10 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </symbol>
        <symbol id="statusOk">
          <path
            d="M6.97054008,4.7227369 L9.5515609,2.14171608 C9.78587547,1.90740151 10.1657745,1.90740151 10.400089,2.14171608 C10.6344036,2.37603066 10.6344036,2.75592964 10.400089,2.99024422 L7.00597649,6.38435677 L6.89874265,6.27712293 L6.86330624,6.31255934 L5.52080627,4.97005937 L6.36933441,4.12153123 L6.97054008,4.7227369 Z M3.27156212,4.42171486 L6.5515609,1.14171608 C6.78587547,0.907401505 7.16577446,0.907401505 7.40008904,1.14171608 C7.63440361,1.37603066 7.63440361,1.75592964 7.40008904,1.99024422 L4.00597649,5.38435677 L4.00131912,5.3796994 L3.26690476,6.11411377 L1.14558441,3.99279343 C0.911269837,3.75847885 0.911269837,3.37857986 1.14558441,3.14426529 C1.37989899,2.90995071 1.75979797,2.90995071 1.99411255,3.14426529 L3.27156212,4.42171486 Z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="speechBubbles">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-14.000000, -9.000000)"
              fill="currentColor"
              fillRule="nonzero"
            >
              <g transform="translate(14.000000, 9.000000)">
                <path
                  d="M8.75,0 C13.5825156,0 17.5,3.12077124 17.5,6.97044141 C17.5,10.8201116 13.5825156,13.9408828 8.75,13.9408828 C8.28592188,13.9408828 7.83041146,13.911813 7.38583854,13.856365 C5.50630208,15.6991406 3.33582813,16.0295676 1.16666667,16.078125 L1.16666667,15.6271121 C2.33792708,15.0644854 3.28125,14.0397202 3.28125,12.8684934 C3.28125,12.7050923 3.26827083,12.5446699 3.24424479,12.3877288 C1.26532292,11.109769 0,9.15789185 0,6.97044141 C0,3.12077124 3.91752083,0 8.75,0 Z M18.15625,15.6238821 C18.15625,16.6277959 18.8181875,17.506207 19.8333333,17.9884431 L19.8333333,18.375 C17.9534687,18.333405 16.2278594,18.0501716 14.5990104,16.4706753 C14.2136458,16.5181919 13.8189479,16.5432063 13.4166667,16.5432063 C11.6763646,16.5432063 10.0732917,16.0809961 8.79349479,15.3042935 C11.4307448,15.2951777 13.9205937,14.4634937 15.8086979,12.9594712 C16.7604427,12.2012512 17.5111927,11.3116787 18.0402031,10.3153733 C18.6010052,9.25906201 18.8854167,8.13366504 18.8854167,6.97044141 C18.8854167,6.78295898 18.8772135,6.59655322 18.8624844,6.41115234 C20.185375,7.48662817 21,8.95246509 21,10.5684602 C21,12.443428 19.9034062,14.1164143 18.1883698,15.2118442 C18.1675156,15.3462832 18.15625,15.4838086 18.15625,15.6238821 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </symbol>
      </svg>
    );
  }
}

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  icon(sign, color, size) {
    switch (sign) {
      case 'logo':
        return (
          <svg
            viewBox="0 0 22 22"
            style={{ fill: color, color: color }}
            width={size || 20}
            height={size || 20}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'logo2':
        return (
          <svg
            viewBox="0 0 32 32"
            style={{ fill: color, color: color }}
            width={size || 20}
            height={size || 20}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'send':
        return (
          <svg
            viewBox="0 0 25 25"
            style={{ fill: color, color: color }}
            //className={css(styles.red)}
            width={size || 20}
            height={size || 20}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'statusWait':
        return (
          <svg
            viewBox="1 1 11 11"
            style={{ fill: color, color: color }}
            width={size || 12}
            height={size || 12}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'statusError':
        return (
          <svg
            viewBox="1 1 11 11"
            style={{ fill: color, color: color }}
            width={size || 12}
            height={size || 12}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'statusSend':
        return (
          <svg
            viewBox="1 1 12 12"
            style={{ fill: color, color: color }}
            width={size || 12}
            height={size || 12}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'statusOk':
        return (
          <svg
            viewBox="1 1 12 12"
            style={{ fill: color, color: color }}
            width={size || 12}
            height={size || 12}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      case 'speechBubbles':
        return (
          <svg
            viewBox="0 0 21 19"
            style={{ fill: color, color: color }}
            width={size || 30}
            height={size || 30}
          >
            <use xlinkHref={'#' + sign} />
          </svg>
        );
      default:
        return this.props.children;
    }
  }

  render() {
    return this.icon(this.props.sign, this.props.color, this.props.size);
  }
}
