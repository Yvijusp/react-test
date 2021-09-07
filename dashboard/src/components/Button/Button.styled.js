import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ accountControl }) =>
    accountControl ? `10px 35px` : `3px 35px`};
  margin-top: 10px;

  outline: none;
  cursor: pointer;
  border: none;

  background-color: ${({ increment, decrement, accountControl }) =>
    increment
      ? `#1A9018`
      : decrement
      ? `#F1F1F1`
      : accountControl
      ? `#186dfc`
      : `transparent`};
  color: ${({ increment, decrement, accountControl }) =>
    increment ? `#fff` : decrement ? `#000` : accountControl ? `#fff` : `#000`};
`;
