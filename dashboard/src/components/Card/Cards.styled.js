import styled from 'styled-components';

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  .card {
    max-width: 200px;
    padding: 15px;

    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.8);
  }

  img {
    width: 100%;
  }

  .card-body {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
  }
  .card-buttons {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`;
