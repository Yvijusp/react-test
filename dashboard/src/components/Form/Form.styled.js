import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 20px;
  box-shadow: 0 0 10px 3px rgba(40, 40, 40, 0.2);
  max-width: fit-content;
  margin: 20px auto;

  .form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
      margin-bottom: 5px;
    }

    input {
      width: fit-content;
      padding: 6px 15px;
      outline: none;
      border: none;
      background-color: #f4f4f4;
      box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.5);
    }
    input[type='submit'] {
      background-color: #186dfc;
      color: white;
      cursor: pointer;
    }
  }
`;
