import React from "react";
import { NavLink } from "react-router-dom";
import "~~/components/admin/AdminSidebar.scss";
const AdminSideBar = () => {
  return (
    <div className="admin-sidebar">
      <div className="heading">
        <h1>admin</h1>
      </div>
      <div className="sidebar-btn">
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="usermanagement"
        >
          Người Dùng
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="insertproduct"
        >
          Thêm sản phẩm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="adminproduct"
        >
          Sản phẩm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="adminorder"
        >
          Đơn Hàng
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="admincategory"
        >
          Danh mục
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="adminbrand"
        >
          Thương Hiệu
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSideBar;
