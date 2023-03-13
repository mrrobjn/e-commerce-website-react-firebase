import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileMenu.scss";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, where, onSnapshot } from "firebase/firestore";
const ProfileMenu = () => {
  const [datas, setDatas] = useState("");
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("uid", "==", user ? user.uid : "")
      );
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          setDatas(doc.data());
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="profile-menu-container">
        <div className="menu-btn-container">
          <div className="user-img">
            <img src="/assets/images/user.png" alt="" />
            <p>{datas.name || "loading"}</p>
          </div>
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
          <Link to="/profile/password">
            <div className="menu-btn">
              <i className="fa-solid fa-lock"></i> Mật khẩu
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
