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

export { makeArray, isBlockOccupied };
