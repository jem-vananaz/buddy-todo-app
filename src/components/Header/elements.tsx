import styled from 'styled-components';

export const Header = styled.div`
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto 1fr; /* Auto-sized column for TodoTitle, 1fr-sized column for spacing, and auto-sized column for LogoutButton */
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the start (left) */
  justify-content: space-between;

  @media (min-width: 600px) {
    margin-bottom: 0;
    grid-column: 1 / -1; /* Span across all columns */
  }
`;

export const HeaderTitle = styled.h1`
  color: #2F80ED;
  font-family: 'Roboto', sans-serif;
  margin-right: 16px;
  margin-top: 0;
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

export const SearchFieldWrapper = styled.div`
  display: flex;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > *:first-child {
      margin-right: 12px; /* Add margin to the right of the first child (SearchField) */
    }
  }
`;