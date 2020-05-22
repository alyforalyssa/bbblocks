import styled from 'styled-components';

/**
 * Body html of the website
 */
export const AppContainer = styled.div`
  display: flex;
  width: 75%;
  background-color: ${props => props.backgroundColor || '#f2f4f6'};
  min-height: 100vh;
`;

export const AppControlContainer = styled.div`
  width: 25%;
`;
