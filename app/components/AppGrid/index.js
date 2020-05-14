/**
 *
 * AppGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  AppGridContainer,
  BlocksGrid,
  BlockItemPositionContainer,
} from './style';
import AppGridGuidelines from './AppGridGuidelines';
import AppGridController from './AppGridController';
const AppGrid = props => {
  const { row, column, blocks, actions } = props;
  // to change
  const blockHeight = '300px';
  const blockWidth = `${100 / column}%`;
  const appGridGuidelinesProps = {
    row,
    column,
    blocks,
    blockHeight,
    blockWidth,
  };
  return (
    <AppGridContainer>
      {/* transparent grid line in the back */}
      <AppGridGuidelines {...appGridGuidelinesProps} />
      {/* the actual grid of blocks */}
      <BlocksGrid
        row={row}
        column={column}
        blockWidth={blockWidth}
        blockHeight={blockHeight}
      >
        {blocks.map(block => (
          <AppBlock block={block} key={block.id} actions={actions} />
        ))}
      </BlocksGrid>
    </AppGridContainer>
  );
};

AppGrid.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  blocks: PropTypes.array,
  actions: PropTypes.shape({
    onSelectBlock: PropTypes.func.isRequired,
  }),
};

const AppBlock = props => {
  const { block, actions } = props;
  console.log(actions);
  return (
    <BlockItemPositionContainer
      {...block.position}
      onClick={() => {
        console.log(block);
        actions.onSelectBlock(block);
      }}
    >
      {block.id}
    </BlockItemPositionContainer>
  );
};

AppBlock.propTypes = {
  block: PropTypes.any.isRequired,
  actions: PropTypes.shape({
    onSelectBlock: PropTypes.func.isRequired,
  }),
};
export default AppGrid;
export { AppGridController };
