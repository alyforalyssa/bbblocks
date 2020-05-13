import styled from 'styled-components';

export const AppGridItemContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.backgroundColor || '#eaedf1'};
  border-radius: ${props => props.borderRadius || '16px'};
  margin: ${props => props.margin || '16px'};
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
`;
