import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { logout, auth } from "../firebase";
const Head = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signOutBtn = () => {
    logout(auth);
    navigate("/");
  };
  return (
    <div className="head">
      <div className="head-container">
        <div className="left-head">
          <Link>Kênh người bán</Link>
        </div>
        <div className="right-head">
          {user ? (
            <>
              <div className="user-avt">
                <img src={user?.photoURL || "/assets/images/user.png"} alt="" />
              </div>
              <div className="dropdown">
                <span>{user?.displayName || "unknown"}</span>
                <div className="dropdown-content">
                  <Link className="dropdown-btn" to="/profile/userprofile">
                    Tài khoản
                  </Link>
                  <Link className="dropdown-btn" to="/profile/purchasehistory">
                    Đơn hàng
                  </Link>
                  <div className="dropdown-btn" onClick={signOutBtn}>
                    Đăng xuất
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="register">Đăng kí</Link>
              <div className="vl"></div>
              <Link to="login">Đăng nhập</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
