/**
 *
 * AppGridGuidelines
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import {
  AppGridItemContainer,
  AppRowContainer,
  AppGridItemDroppable,
  BlocksGridGuidelines,
} from './style';
import { makeArray, isBlockOccupied } from './utils';

const AppGridGuidelinesItem = props => {
  const { blocks, xPosition, yPosition } = props;
  //   if (isBlockOccupied({ blocks, xPosition, yPosition })) {
  //     return (
  //       <AppGridItemEmptyContainer width={props.width} height={props.height} />
  //     );
  //   }
  const droppableId = `x${xPosition},y${yPosition}`;
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <AppGridItemContainer width={props.width} height={props.height}>
          <AppGridItemDroppable
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="droppable"
            isDraggingOver={snapshot.isDraggingOver}
          >
            {provided.placeholder}
          </AppGridItemDroppable>
        </AppGridItemContainer>
      )}
    </Droppable>
  );
};
// x and y position are the item's index on the grid
AppGridGuidelinesItem.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  blocks: PropTypes.array,
  xPosition: PropTypes.number,
  yPosition: PropTypes.number,
};

const AppGridGuidelinesRow = props => {
  const { column, blocks, rowIndex, blockWidth, blockHeight } = props;

  return (
    <AppRowContainer>
      {makeArray(column).map(c => (
        <AppGridGuidelinesItem
          key={c.toString()}
          xPosition={rowIndex + 1}
          yPosition={c + 1}
          blocks={blocks}
          width={blockWidth}
          height={blockHeight}
        />
      ))}
    </AppRowContainer>
  );
};
AppGridGuidelinesRow.propTypes = {
  column: PropTypes.number,
  blocks: PropTypes.array,
  rowIndex: PropTypes.number,
  blockWidth: PropTypes.string,
  blockHeight: PropTypes.string,
};

const AppGridGuidelines = props => (
  <BlocksGridGuidelines>
    {makeArray(props.row).map(r => (
      <AppGridGuidelinesRow
        key={r.toString()}
        rowIndex={r}
        column={props.column}
        blockWidth={props.blockWidth}
        blockHeight={props.blockHeight}
        blocks={props.blocks}
      />
    ))}
  </BlocksGridGuidelines>
);
AppGridGuidelines.propTypes = {
  row: PropTypes.number,
  blockHeight: PropTypes.string,
  blockWidth: PropTypes.string,
  column: PropTypes.number,
  blocks: PropTypes.array,
};

export default AppGridGuidelines;
export { AppGridGuidelinesItem, AppGridGuidelinesRow };
