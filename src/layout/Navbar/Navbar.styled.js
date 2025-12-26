import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 22px 32px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0; /* Sidebar bilan vizual ajralib turishi uchun */
  display: flex;
  align-items: center;
  height: 80px; /* Layoutdagi balandlikni ushlab turish uchun */
  box-sizing: border-box;
`;

export const NavbarTitle = styled.h1`
  font-size: 28px;
  color: #454545;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize; /* Sarlavhani chiroyli chiqarish uchun */
`;
