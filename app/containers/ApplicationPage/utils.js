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
