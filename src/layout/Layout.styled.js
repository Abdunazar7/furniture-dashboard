import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Main = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const ChildrenContent = styled.div`
  padding: 11px 32px 22px 32px;
  flex: 1;
  overflow-y: auto;
`;
