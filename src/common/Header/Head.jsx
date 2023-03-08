import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { logout, auth, db } from "../../firebase";
import { collection, getDoc, where, getDocs, query } from "firebase/firestore";
const Head = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetchUser();
  }, [user, loading]);
  const signOutBtn = () => {
    logout(auth);
    navigate("/");
  };
  const fetchUser = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setName(data.name);
  };
  return (
    <div className="head">
      <div className="left-head">
        {user ? (
          <>
            <i className="fa-solid fa-user"></i>
            <p>{name}</p>
          </>
        ) : (
          ""
        )}
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
  );
};

export default Head;
