import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'style';

import Input, { IQuestionType } from 'components/Form';
import {
  AppGridControllerContainer,
  AppGridBlockStyleControllerContainer,
} from './style';

const AppGridBlockStyleController = ({
  block,
  onBlockStyleChange,
  onAddSubBlock,
}) => (
  <AppGridBlockStyleControllerContainer>
    <Input
      question={{
        label: 'BACKGROUND COLOR',
        question_type: IQuestionType.COLOR_PICKER,
        id: 'backgroundColor',
      }}
      handleChange={state => onBlockStyleChange(block, state)}
      extraInputProps={{
        defaultColor: block.style.backgroundColor,
      }}
    />
    <Button
      onClick={() =>
        onAddSubBlock(block, 'header1', {
          text: 'hello',
          options: { color: 'red' },
        })
      }
    >
      Add Content
    </Button>
  </AppGridBlockStyleControllerContainer>
);

AppGridBlockStyleController.propTypes = {
  block: PropTypes.any.isRequired,
  onBlockStyleChange: PropTypes.func.isRequired,
  onAddSubBlock: PropTypes.func.isRequired,
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
        <AppGridBlockStyleController
          block={userSelect.block}
          onBlockStyleChange={actions.onBlockStyleChange}
          onAddSubBlock={actions.onAddSubBlock}
        />
      )}
      {JSON.stringify(userSelect.block)}
    </AppGridControllerContainer>
  );
};

AppGridMainController.propTypes = {
  userSelect: PropTypes.any,
  actions: PropTypes.shape({
    onAddBlock: PropTypes.func.isRequired,
    onBlockStyleChange: PropTypes.func.isRequired,
    onAddSubBlock: PropTypes.func.isRequired,
  }),
};

export default AppGridMainController;
