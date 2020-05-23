import styled from 'styled-components';

export const AppGridItemContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.backgroundColor};
  border-top: 1px dashed #a4afb3;
  border-left: 1px dashed #a4afb3;
  border-bottom: ${props => props.lastRow && '1px dashed #a4afb3'};
`;

export const AppGridItemEmptyContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;
export const AppRowContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const AppGridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BlocksGrid = styled.div`
  display: grid;
  z-index: 2;
  grid-template-columns: ${props =>
    `repeat(${props.column || '3'}, ${props.blockWidth || '300px'} [col])`};
  grid-template-rows: ${props =>
    `repeat(${props.row}, ${props.blockHeight} [row])`};
`;

export const BlocksGridGuidelines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const BlockItemPositionContainer = styled.div`
  grid-column-start: ${props => props.gridColumnStart};
  grid-column-end: ${props => props.gridColumnEnd};
  grid-row-start: ${props => props.gridRowStart};
  grid-row-end: ${props => props.gridRowEnd};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius || '4px'};
`;

export const AppGridControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AppGridBlockStyleControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppGridItemDroppable = styled.div`
  background: ${props =>
    props.isDraggingOver ? 'rgb(231, 237, 243)' : 'inherit'};
  height: 100%;
`;
