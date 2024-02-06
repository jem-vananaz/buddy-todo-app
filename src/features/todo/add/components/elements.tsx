import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto 1fr; /* Auto-sized column for TodoTitle, 1fr-sized column for spacing, and auto-sized column for LogoutButton */
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    margin-bottom: 0;
    grid-column: 1 / -1; /* Span across all columns */
  }
`;

export const HeaderTitle = styled.h1`
  color: #2f80ed;
  font-family: 'Roboto', sans-serif;
  margin-top: 0;
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 7px; /* Add margin to the right of the first child (SearchField) */
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    width: 100%;

    & > *:first-child {
      margin-right: 14px; /* Add margin to the right of the first child (SearchField) */
    }
  }
`;
