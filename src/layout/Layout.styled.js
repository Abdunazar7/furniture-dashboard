import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5; /* Sahifa foni biroz kulrangroq */
`;

export const Main = styled.div`
  /* Sidebar kengligi 300px bo'lgani uchun qolgan joyni egallaydi */
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Kontent sig'may qolganda overflow muammosini oldini oladi */
`;

export const ChildrenContent = styled.div`
  /* Siz ko'rsatgan padding o'lchamlari */
  padding: 11px 32px 22px 32px;
  flex: 1;
  overflow-y: auto; /* Agar kontent ko'p bo'lsa faqat o'ng tomon scroll bo'ladi */
`;
