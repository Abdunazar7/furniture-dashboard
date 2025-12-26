import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarAside = styled.aside`
  position: sticky;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #454545;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: 18px;
  font-weight: 500;

  h2 {
    font-size: 18px;
    margin: 0;
  }

  svg {
    cursor: pointer;
  }
`;

export const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
`;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 6px;
  color: #ddd;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #5a5a5a;
    color: #fff;
  }

  svg {
    font-size: 20px;
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #ddd;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;
