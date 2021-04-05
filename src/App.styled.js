import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Header = styled.header`
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #33ad73;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
  & > a {
    margin-right: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 10px;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;
