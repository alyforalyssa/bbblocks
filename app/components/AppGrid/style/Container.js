import styled from 'styled-components';

export const AppGridItemContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.backgroundColor || '#f2f4f6'};
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
