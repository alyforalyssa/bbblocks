/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import InputTypeColorPicker from './colorPicker';

export const IQuestionType = {
  SHORT_TEXT: 'short_text',
  LONG_TEXT: 'long_text',
  YES_NO: 'yes_no',
  DATE: 'date',
  NUMBER: 'number',
  DROPDOWN: 'dropdown',
  FILE_UPLOAD: 'file_upload',
  QUESTION_GROUP: 'question_group',
  COLOR_PICKER: 'color_picker',
  SELECT: 'select',
};

const Input = props => {
  switch (props.question.question_type) {
    case IQuestionType.COLOR_PICKER:
      return <InputTypeColorPicker {...props} />;
    default:
      return null;
  }
};

Input.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    question_type: PropTypes.string,
    question_details: PropTypes.any,
  }),
  handleChange: PropTypes.func,
  extraInputProps: PropTypes.any,
};

export default Input;
