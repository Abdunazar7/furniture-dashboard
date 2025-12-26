import React from "react";
import { ArrowLeftIcon, Logout, NewCategoryIcon, Pen } from "../../components";
import {
  SidebarAside,
  SidebarHeader,
  SidebarMenu,
  SidebarItem,
  SidebarFooter,
} from "./Sidebar.styled";

function Sidebar() {
  return (
    <SidebarAside>
      <SidebarHeader>
        <ArrowLeftIcon />
        <h2>Admin Dashboard</h2>
      </SidebarHeader>

      <SidebarMenu>
        <SidebarItem to="/create-product">
          <NewCategoryIcon />
          <span>Create product</span>
        </SidebarItem>

        <SidebarItem to="/manage-product">
          <Pen />
          <span>Manage product</span>
        </SidebarItem>

        <SidebarItem to="/create-category">
          <NewCategoryIcon />
          <span>Create category</span>
        </SidebarItem>

        <SidebarItem to="/manage-category">
          <Pen />
          <span>Manage category</span>
        </SidebarItem>
      </SidebarMenu>

      <SidebarFooter>
        <Logout />
        <span>Log out</span>
      </SidebarFooter>
    </SidebarAside>
  );
}

export default Sidebar;
