import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Wrapper, Main, ChildrenContent } from "./Layout.styled";

function MainLayout() {
  return (
    <Wrapper>
      {/* Chap tomondagi doimiy qism (300px) */}
      <Sidebar />

      <Main>
        {/* Yuqoridagi sarlavha qismi */}
        <Navbar />

        {/* Ichki sahifalar (Create Product, Manage Product va h.k.) */}
        <ChildrenContent>
          <Outlet />
        </ChildrenContent>
      </Main>
    </Wrapper>
  );
}

export default MainLayout;
