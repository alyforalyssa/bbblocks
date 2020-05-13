/**
 *
 * AppGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import {
  AppGridItemContainer,
  AppRowContainer,
  AppGridContainer,
  AppGridItemEmptyContainer,
  BlocksGridGuidelines,
  BlocksGrid,
} from './style';

// in item check if the items position is occupied by a block. if it is render nothing (make place for the block)
const makeArray = number => {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  return arr;
};
const isBlockOccupied = ({ xPosition, yPosition, blocks }) => {
  if (!blocks) return false;
  const block = blocks.find(b => {
    const isSameColumn =
      b.position.gridColumnStart <= yPosition &&
      yPosition < b.position.gridColumnEnd;
    const isSameRow =
      b.position.gridRowStart <= xPosition && xPosition < b.position.gridRowEnd;
    return isSameColumn && isSameRow;
  });
  return !!block;
};
const AppGridItem = props => {
  const { blocks, xPosition, yPosition } = props;
  if (isBlockOccupied({ blocks, xPosition, yPosition })) {
    return (
      <AppGridItemEmptyContainer width={props.width} height={props.height} />
    );
  }
  return <AppGridItemContainer width={props.width} height={props.height} />;
};
// x and y position are the item's index on the grid
AppGridItem.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  blocks: PropTypes.array,
  xPosition: PropTypes.number,
  yPosition: PropTypes.number,
};

const AppRow = props => {
  const { column, blocks, rowIndex, blockWidth, blockHeight } = props;

  return (
    <AppRowContainer>
      {makeArray(column).map(c => (
        <AppGridItem
          key={c.toString()}
          xPosition={rowIndex}
          yPosition={c}
          blocks={blocks}
          width={blockWidth}
          height={blockHeight}
        />
      ))}
    </AppRowContainer>
  );
};
AppRow.propTypes = {
  column: PropTypes.number,
  blocks: PropTypes.array,
  rowIndex: PropTypes.number,
  blockWidth: PropTypes.string,
  blockHeight: PropTypes.string,
};

const AppGrid = props => {
  const { row, column, blocks } = props;
  // to change
  const blockHeight = '300px';
  const blockWidth = `${100 / column}%`;
  return (
    <AppGridContainer>
      {/* transparent grid line in the back */}
      <BlocksGridGuidelines>
        {makeArray(row).map(r => (
          <AppRow
            key={r.toString()}
            rowIndex={r}
            column={column}
            blockWidth={blockWidth}
            blockHeight={blockHeight}
            blocks={blocks}
          />
        ))}
      </BlocksGridGuidelines>
      {/* the actual grid of blocks */}
      <BlocksGrid
        row={row}
        column={column}
        blockWidth={blockWidth}
        blockHeight={blockHeight}
      >
        <div />
      </BlocksGrid>
    </AppGridContainer>
  );
};

AppGrid.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  blocks: PropTypes.array,
};

export default AppGrid;
