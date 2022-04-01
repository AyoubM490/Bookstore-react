import React from 'react';
import PropTypes from 'prop-types';
import './buttonColor.css';

export default function Button({ ...props }) {
  return (
    <button
      className={`text-white azure rounded w-fit ${props.twClasses}`}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
  twClasses: 'px-5 py-1 text-lg',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};
