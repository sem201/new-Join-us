import styled from "styled-components";

export const Input = styled.input`
  width: 80%;
  height: 50px;

  border-radius: 69px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};
`;
