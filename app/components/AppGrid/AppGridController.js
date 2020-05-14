import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'style';

import Input, { IQuestionType } from 'components/Form';
import {
  AppGridControllerContainer,
  AppGridBlockStyleControllerContainer,
} from './style';

const AppGridBlockStyleController = ({ block }) => (
  <AppGridBlockStyleControllerContainer>
    <Input
      question={{
        label: 'BACKGROUND COLOR',
        question_type: IQuestionType.COLOR_PICKER,
        id: 'backgroundColor',
      }}
      handleChange={() => {}}
      extraInputProps={{
        defaultColor: block.style.backgroundColor,
      }}
    />
  </AppGridBlockStyleControllerContainer>
);

AppGridBlockStyleController.propTypes = {
  block: PropTypes.any.isRequired,
};

const AppGridMainController = props => {
  const { actions, userSelect } = props;
  return (
    <AppGridControllerContainer>
      <Button
        onClick={() =>
          actions.onAddBlock({
            position: {
              gridColumnStart: 1,
              gridColumnEnd: 2,
              gridRowStart: 2,
              gridRowEnd: 3,
            },
          })
        }
      >
        Add Block
      </Button>
      {userSelect.block && (
        <AppGridBlockStyleController block={userSelect.block} />
      )}
      {JSON.stringify(userSelect.block)}
    </AppGridControllerContainer>
  );
};

AppGridMainController.propTypes = {
  userSelect: PropTypes.any,
  actions: PropTypes.shape({
    onAddBlock: PropTypes.func,
  }),
};

export default AppGridMainController;
