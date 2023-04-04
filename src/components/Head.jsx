import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "~/context/UserContext";
import { logout, auth } from "../firebase";
const Head = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const users = useContext(UserContext);
  const logUser = users?.find((userss) => userss.data.uid === user?.uid);
  const signOutBtn = () => {
    logout(auth);
    navigate("/");
  };
  return (
    <div className="head">
      <div className="head-container">
        <div className="left-head">
          {logUser?.data.role === "admin" ? (
            <Link to="/admin/usermanagement">Quản trị viên</Link>
          ) : (
            ""
          )}
        </div>
        <div className="right-head">
          {user && logUser ? (
            <>
              <div className="user-avt">
                <img src={logUser.data.photoURL || "/assets/images/user.png"} alt="" />
              </div>
              <div className="dropdown">
                <span>{logUser.data.name || "unknown"}</span>
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
