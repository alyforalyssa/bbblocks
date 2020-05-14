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
  console.log(`isColumnOverlap: ${isColumnOverlap}`);
  console.log(`isRowOverlap: ${isRowOverlap}`);
  return isColumnOverlap && isRowOverlap;
};
export const isValidBlock = ({ blockData, state }) => {
  if (!blockData.position) return false;
  console.log(blockData);
  console.log(state.blocks);
  if (
    blockData.position.gridColumnStart < 1 ||
    blockData.position.gridRowStart < 1 ||
    blockData.position.gridColumnEnd > state.column + 1 ||
    blockData.position.gridRowEnd > state.row + 1
  ) {
    return false;
  }
  const overlappingBlock = state.blocks.find(b =>
    isOverlappingBlocks(blockData.position, b.position),
  );
  return !overlappingBlock;
};
