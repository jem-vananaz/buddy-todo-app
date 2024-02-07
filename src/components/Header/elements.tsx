import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
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
  font-size: 18px;
`;

export const LogoutButtonWrapper = styled.div`
  margin-right: -14px;
`;

export const SearchFieldWrapper = styled.div`
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
