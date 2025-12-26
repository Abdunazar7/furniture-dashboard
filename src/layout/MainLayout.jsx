import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Wrapper, Main, ChildrenContent } from "./Layout.styled";

function MainLayout() {
  return (
    <Wrapper>
      <Sidebar />

      <Main>
        <Navbar />
        <ChildrenContent>
          <Outlet />
        </ChildrenContent>
      </Main>
    </Wrapper>
  );
}

export default MainLayout;
