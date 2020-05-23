export const isOverlappingBlocks = (blockA, blockB) => {
  const isColumnOverlap =
    (blockA.gridColumnStart < blockB.gridColumnEnd &&
      blockA.gridColumnEnd > blockB.gridColumnStart) ||
    (blockB.gridColumnStart < blockA.gridColumnEnd &&
      blockB.gridColumnEnd > blockA.gridColumnStart);
  const isRowOverlap =
    (blockA.gridRowStart < blockB.gridRowEnd &&
      blockA.gridRowEnd > blockB.gridRowStart) ||
    (blockB.gridRowStart < blockA.gridRowEnd &&
      blockB.gridRowEnd > blockA.gridRowStart);
  return isColumnOverlap && isRowOverlap;
};
export const isValidBlock = ({ blockData, state }) => {
  if (!blockData.position) return false;
  if (
    blockData.position.gridColumnStart < 1 ||
    blockData.position.gridRowStart < 1 ||
    blockData.position.gridColumnEnd > state.column + 1 ||
    blockData.position.gridRowEnd > state.row + 1
  ) {
    return false;
  }
  const overlappingBlock = Object.keys(state.blocks).find(id =>
    isOverlappingBlocks(blockData.position, state.blocks[id].position),
  );
  return !overlappingBlock;
};

export const getColumnAndRowFromDroppableId = droppableId => {
  // droppableId is in the form of "x3,y6"
  const arr = droppableId.split(',');
  // slice off x
  const row = arr[0].slice(1);
  // slice off y
  const column = arr[1].slice(1);
  return {
    row: parseInt(row, 10),
    column: parseInt(column, 10),
  };
};

export const getBlockGridPosition = ({
  droppableId,
  draggableId,
  draggables,
}) => {
  const starts = getColumnAndRowFromDroppableId(droppableId);

  const { props } = draggables[draggableId];
  const { row, column } = props;
  return {
    gridColumnStart: starts.column,
    gridColumnEnd: starts.column + column,
    gridRowStart: starts.row,
    gridRowEnd: starts.row + row,
  };
};
