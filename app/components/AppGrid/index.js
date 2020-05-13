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
        {blocks.map(b => (
          <BlockItemPositionContainer {...b.position}>
            {b.id}
          </BlockItemPositionContainer>
        ))}
      </BlocksGrid>
    </AppGridContainer>
  );
};

// const AppBlock = (props) => {
//   return (
//     <BlockItemPositionContainer {...b.position}>
//       {b.id}
//     </BlockItemPositionContainer>
//   );
// }
AppGrid.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  blocks: PropTypes.array,
  actions: PropTypes.shape({
    onSelectBlock: PropTypes.func.isRequired,
  }),
};

export default AppGrid;
