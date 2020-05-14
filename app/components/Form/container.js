import React from 'react';
import PropTypes from 'prop-types';

export const inputPropTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    question_type: PropTypes.string,
    question_details: PropTypes.any,
    extraInputProps: PropTypes.any,
  }),
  handleChange: PropTypes.func,
  extraInputProps: PropTypes.any,
};

const InputContainer = props => (
  <React.Fragment>
    {props.label && <small>{props.label}</small>}
    {props.children}
  </React.Fragment>
);

InputContainer.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default InputContainer;
