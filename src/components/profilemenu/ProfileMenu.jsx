import React from "react";
import { Link } from "react-router-dom";
import './ProfileMenu.scss'

const ProfileMenu = () => {
  return (
    <>
      <div className="profile-menu-container">
        <div className="menu-btn-container">
          <Link to="/profile/userprofile">
            <div className="menu-btn">
              <i className="fa-regular fa-user"></i> Hồ sơ
            </div>
          </Link>
          <Link to="/profile/purchasehistory">
            <div className="menu-btn">
              <i className="fa-regular fa-circle-check"></i> Lịch sử mua hàng
            </div>
          </Link>
          <div className="menu-btn">
          <i className="fa-solid fa-screwdriver-wrench"></i> Hỗ trợ
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
