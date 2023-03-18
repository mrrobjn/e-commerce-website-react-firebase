import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { logout, auth, db } from "../../firebase";
const Head = ({ users }) => {
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
          <a >Kênh người bán</a>
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
                  <div
                    className="dropdown-btn"
                    onClick={() => navigate("/profile/userprofile")}
                  >
                    Tài khoản
                  </div>
                  <div className="dropdown-btn" onClick={() => navigate("/profile/purchasehistory")}>Đơn hàng</div>
                  <div className="dropdown-btn" onClick={signOutBtn}>
                    Đăng xuất
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <a onClick={() => navigate("/register")}>Đăng kí</a>
              <div className="vl"></div>
              <a onClick={() => navigate("/login")}>Đăng nhập</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
