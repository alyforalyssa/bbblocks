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
} from './style';

const makeArray = number => {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  return arr;
};
const AppGridItem = props => {
  return (
    <AppGridItemContainer width={props.width} height={props.height}>
      hello
    </AppGridItemContainer>
  );
};
AppGridItem.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

const rowHeight = '300px';

const AppRow = props => {
  const { column } = props;
  const itemWidth = `${100 / column}%`;

  return (
    <AppRowContainer>
      {makeArray(column).map(c => (
        <AppGridItem key={c.toString()} width={itemWidth} height={rowHeight} />
      ))}
    </AppRowContainer>
  );
};
AppRow.propTypes = {
  column: PropTypes.number,
};

const AppGrid = props => {
  const { row, column } = props;
  return (
    <AppGridContainer>
      {makeArray(row).map(r => (
        <AppRow key={r.toString()} column={column} />
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
