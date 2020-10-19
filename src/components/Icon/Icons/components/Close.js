/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Close = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M1.38755 0.539505C1.15323 0.305191 0.773332 0.305191 0.539017 0.539505C0.304703 0.77382 0.304703 1.15372 0.539017 1.38803L7.15179 8.00081L0.540252 14.6123C0.305937 14.8467 0.305937 15.2266 0.540252 15.4609C0.774567 15.6952 1.15447 15.6952 1.38878 15.4609L8.00032 8.84933L14.6119 15.4609C14.8462 15.6952 15.2261 15.6952 15.4604 15.4609C15.6947 15.2266 15.6947 14.8467 15.4604 14.6123L8.84885 8.00081L15.4616 1.38803C15.6959 1.15372 15.6959 0.77382 15.4616 0.539505C15.2273 0.305191 14.8474 0.305191 14.6131 0.539505L8.00032 7.15228L1.38755 0.539505Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Close.displayName = 'Close';
Close.propTypes = {
  size: PropTypes.string
}
export default Close;
/* tslint:enable */
/* eslint-enable */