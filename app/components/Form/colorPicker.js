import * as React from 'react';
import { TwitterPicker } from 'react-color';

import InputContainer, { inputPropTypes } from './container';

const InputTypeColorPicker = props => {
  const { question, handleChange, extraInputProps } = props;
  const [state, setState] = React.useState({});
  const onChange = color => {
    const newState = {
      id: question.id,
      value: color.hex,
    };
    handleChange(newState);
    setState(newState);
  };
  return (
    <InputContainer label={question.label}>
      <TwitterPicker
        width="100%"
        color={
          state.value ||
          (extraInputProps && extraInputProps.defaultColor) ||
          '#fff'
        }
        onChangeComplete={onChange}
        {...extraInputProps}
      />
    </InputContainer>
  );
};

InputTypeColorPicker.propTypes = inputPropTypes;
export default InputTypeColorPicker;
