import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { logout, auth } from "../../firebase";
const Head = ({ users }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);

  const signOutBtn = () => {
    logout(auth);
    navigate("/");
  };
  // const userRef =
  //   users && users.find((userss) => userss.data.uid === user?.uid);
  // setName(userRef.data.name);
  // setEmail(userRef.data.email);
  return (
    <div className="head">
      <div className="head-container">
        <div className="left-head">
          {/* {user ? (
            <>
              <i className="fa-solid fa-user"></i>
              <p>Xin chào {name || email}</p>
            </>
          ) : (
            ""
          )} */}
        </div>
        <div className="right-head">
          {user ? (
            <a onClick={signOutBtn}>Đăng xuất</a>
          ) : (
            <a onClick={() => navigate("/login")}>Đăng nhập</a>
          )}
          <a>🇻🇳 VN</a>
          <a>🇬🇧 UK</a>
        </div>
      </div>
    </div>
  );
};

export default Head;
