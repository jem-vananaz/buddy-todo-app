import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-left: 8px;
`;

export const BackIcon = styled.img`
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
`;
