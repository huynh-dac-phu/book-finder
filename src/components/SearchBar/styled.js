import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  z-index: 2;
  box-shadow: 0px 8px 20px -8px rgba(0, 0, 0, 0.5);
`;

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  width: 90%;
  max-width: 1440px;
  height: 100%;
`;

export const SearchInput = styled.input`
  padding: 0;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.color.fifty};
  &:focus {
    outline: 0;
  }
`;
