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
  const { row, column, blocks, actions, style } = props;
  const { blockHeight, columnGap, rowGap, width } = style;
  // to change
  const blockWidth = `${Math.floor(width / column)}px`;
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
        columnGap={columnGap}
        rowGap={rowGap}
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
  style: PropTypes.any,
  column: PropTypes.number,
  blocks: PropTypes.array,
  actions: PropTypes.shape({
    onSelectBlock: PropTypes.func.isRequired,
    onInitializeBlockContent: PropTypes.func.isRequired,
  }),
};

const AppBlock = props => {
  const ref = React.useRef(null);
  const { block, actions } = props;
  React.useEffect(() => {
    const blockProps = {};
    if (ref.current) {
      blockProps.width = ref.current.offsetWidth;
      blockProps.height = ref.current.offsetHeight;
    }
    actions.onInitializeBlockContent(block, blockProps);
  }, []);
  return (
    <BlockItemPositionContainer
      {...block.position}
      backgroundColor={block.style.backgroundColor}
      ref={ref}
      onClick={() => {
        actions.onSelectBlock(block);
      }}
    >
      <canvas id={block.id} />
    </BlockItemPositionContainer>
  );
};

AppBlock.propTypes = {
  block: PropTypes.any.isRequired,
  actions: PropTypes.shape({
    onSelectBlock: PropTypes.func.isRequired,
    onInitializeBlockContent: PropTypes.func.isRequired,
  }),
};
export default AppGrid;
export { AppGridController };
