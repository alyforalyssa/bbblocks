/**
 *
 * DnDContext
 *
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

const DnDContext = props => (
  <DragDropContext onDragEnd={props.onDragEnd}>
    {props.children}
  </DragDropContext>
);

export default DnDContext;
DnDContext.propTypes = {
  children: PropTypes.node,
  onDragEnd: PropTypes.func.isRequired,
};
