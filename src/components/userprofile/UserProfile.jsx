import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./UserProfile.scss";
import Skeleton from "react-loading-skeleton";
const UserProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
      fetchUserName();
  }, [user, loading]);
  const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
    setPhoneNo(data.phoneNo);
  };
  return (
    <>
      <div className="user-profile-container">
        {user ? (
          <div className="info-container">
            <div className="info-label">
              <p>Họ và tên:</p>
              <p>Tuổi:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
            </div>
            <div className="user-info">
              {name ? (
                <>
                  <p>{name}</p>
                </>
              ) : (
                <p>
                  <Skeleton width={200} />
                </p>
              )}
              {age ? (
                <>
                  <p>{age}</p>
                </>
              ) : (
                <p>
                  <Skeleton width={200} />
                </p>
              )}
              {email ? (
                <>
                  <p>{email}</p>
                </>
              ) : (
                <p>
                  <Skeleton width={200} />
                </p>
              )}
              {phoneNo ? (
                <>
                  <p>{phoneNo}</p>
                </>
              ) : (
                <p>
                  <Skeleton width={200} />
                </p>
              )}
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
