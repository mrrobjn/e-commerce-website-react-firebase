import {useEffect} from "react";
import "./UserProfile.scss";
const UserProfile = ({ users }) => {
  const logUser = localStorage.getItem("logUser");
  if (logUser) {
    var user = users && users.find((user) => user.id === logUser);
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="user-profile-container">
        {logUser && user ? (
          <div className="info-container">
            <div className="info-label">
              <p>Họ và tên:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
            </div>
            <div className="user-info">
              <p>{user.data.useName}</p>
              <p>{user.data.email}</p>
              <p>{user.data.phoneNo}</p>
            </div>
          </div>
        ) : (
          <div className="no-login">
            <h1>Vui lòng đăng nhập</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
