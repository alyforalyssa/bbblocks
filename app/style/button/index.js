import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #41addd;
  color: #41addd;
  padding: 16px;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default Button;
