import React from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Button } from 'style';

import Input, { IQuestionType } from 'components/Form';

import { allBlocks } from './constants';
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
      <Droppable droppableId="3">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="droppable"
          >
            {allBlocks.map((b, index) => (
              <AppBlockDraggable {...b} key={b.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
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

const AppBlockDraggable = props => {
  const { id, index, image, name, description } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable block-add-container"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <div className="block-add-container-image-container">
            {image && <img src={image} alt={description} />}
          </div>
          <div className="block-add-content">{name}</div>
        </div>
      )}
    </Draggable>
  );
};

AppBlockDraggable.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default AppGridMainController;
