import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

  @media screen and (max-width: 767px){
    overflow: hidden;
  }

  @media screen and (min-width: 768px){
    padding: 8px 108px;
  }
`;