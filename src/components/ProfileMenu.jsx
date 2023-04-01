import { Link, NavLink } from "react-router-dom";
import "~~/components/ProfileMenu.scss";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { UserContext } from "~/context/UserContext";
const ProfileMenu = () => {
  const [user] = useAuthState(auth);
  const users = useContext(UserContext);
  const logUser = users?.find((u) => u.data.uid === user.uid);
  return (
    <>
      <div className="profile-menu-container">
        <div className="menu-btn-container">
          <div className="user-img">
            <img src={user?.photoURL || "/assets/images/user.png"} alt="" />
          </div>
          <p>{logUser?.data.name|| "unknown"}</p>
          <NavLink to="/profile/userprofile" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              <i className="fa-solid fa-user"></i> Tài khoản
          </NavLink>
          <NavLink to="/profile/purchasehistory" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              <i className="fa-solid fa-clipboard-check"></i> Đơn hàng
          </NavLink>
          <a>
            <i className="fa-solid fa-screwdriver-wrench"></i> Hỗ trợ
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
