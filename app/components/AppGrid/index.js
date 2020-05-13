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
  console.log(blocks);
  console.log(xPosition);
  console.log(yPosition);
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

const rowHeight = '300px';

const AppRow = props => {
  const { column, blocks, rowIndex } = props;
  const itemWidth = `${100 / column}%`;

  return (
    <AppRowContainer>
      {makeArray(column).map(c => (
        <AppGridItem
          key={c.toString()}
          xPosition={rowIndex}
          yPosition={c}
          blocks={blocks}
          width={itemWidth}
          height={rowHeight}
        />
      ))}
    </AppRowContainer>
  );
};
AppRow.propTypes = {
  column: PropTypes.number,
  blocks: PropTypes.array,
  rowIndex: PropTypes.number,
};

const AppGrid = props => {
  const { row, column, blocks } = props;
  return (
    <AppGridContainer>
      {makeArray(row).map(r => (
        <AppRow
          key={r.toString()}
          rowIndex={r}
          column={column}
          blocks={blocks}
        />
      ))}
    </AppGridContainer>
  );
};

AppGrid.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  blocks: PropTypes.array,
};

export default AppGrid;
