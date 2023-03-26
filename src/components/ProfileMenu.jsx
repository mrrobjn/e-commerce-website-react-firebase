import { Link } from "react-router-dom";
import "~~/components/ProfileMenu.scss";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const ProfileMenu = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="profile-menu-container">
        <div className="menu-btn-container">
          <div className="user-img">
            <img
              src={user?.photoURL || "/assets/images/user.png"}
              alt=""
            />
          </div>
          <p>{user?.displayName}</p>
          <Link to="/profile/userprofile">
            <div className="menu-btn">
              <i className="fa-solid fa-user"></i> Tài khoản
            </div>
          </Link>
          <Link to="/profile/purchasehistory">
            <div className="menu-btn">
              <i className="fa-solid fa-clipboard-check"></i> Đơn hàng
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
