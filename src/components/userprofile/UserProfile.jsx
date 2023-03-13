import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import "./UserProfile.scss";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [userName, setUserName] = useState("");
  const [userDayOfBirth, setUserDayOfBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNo, setUserPhoneNo] = useState("");
  const [userId, setUserId] = useState("");
  //update
  const [name, setName] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUser();
  }, [user, loading]);
  // fetch user data
  const fetchUser = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("uid", "==", user ? user.uid : "")
      );
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          setUserName(doc.data().name);
          setUserDayOfBirth(doc.data().dayOfBirth);
          setUserEmail(doc.data().email);
          setUserPhoneNo(doc.data().phoneNo);
          setUserId(doc.id);
        });
      });
    } catch (err) {
      errorToast(err.message);
    }
  };
  // update phone
  const updateName = async (e) => {
    e.preventDefault();
    if (!name || name === userName) {
      errorToast("Không hợp lệ hoặc đã tồn tại");
    } else {
      const docRef = doc(db, "users", userId);
      try {
        await updateDoc(docRef, {
          name: name,
        });
        fetchUser();
        successToast("Cập nhật thành công");
      } catch (error) {
        errorToast(error.message);
      }
    }
  };

  // update phone
  const updateDayOfBirth = async (e) => {
    e.preventDefault();
    if (!dayOfBirth || dayOfBirth === userDayOfBirth) {
      errorToast("Không hợp lệ hoặc đã tồn tại");
    } else {
      const docRef = doc(db, "users", userId);
      try {
        await updateDoc(docRef, {
          dayOfBirth: dayOfBirth,
        });
        fetchUser();
        successToast("Cập nhật thành công");
      } catch (error) {
        errorToast(error.message);
      }
    }
  };
  // update phone
  const updatePhoneNo = async (e) => {
    e.preventDefault();
    if (!phoneNo || phoneNo === userPhoneNo) {
      errorToast("Không hợp lệ hoặc đã tồn tại");
    } else {
      const docRef = doc(db, "users", userId);
      try {
        await updateDoc(docRef, {
          phoneNo: phoneNo,
        });
        fetchUser();
        successToast("Cập nhật thành công");
      } catch (error) {
        errorToast(error.message);
      }
    }
  };
  // toast message
  const successToast = (text) => toast.success(`${text}`);
  const errorToast = (text) => toast.error(`${text}`);
  return (
    <>
      <div className="user-profile-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="info-container">
          <h1>Cài đặt tài khoản</h1>
          <div className="input-container">
            <form className="input-field" onSubmit={updateName}>
              <label>Họ & Tên</label>
              <input
                defaultValue={userName}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit">Cập nhật</button>
            </form>
            <form className="input-field" onSubmit={updateDayOfBirth}>
              <label>Ngày sinh</label>
              <input
                defaultValue={userDayOfBirth}
                type="date"
                onChange={(e) => setDayOfBirth(e.target.value)}
              />
              <button type="submit">Cập nhật</button>
            </form>
            <form className="input-field">
              <label>Email</label>
              <input defaultValue={userEmail} type="email" disabled />
            </form>
            <form className="input-field" onSubmit={updatePhoneNo}>
              <label>Số điện thoại</label>
              <input
                defaultValue={userPhoneNo}
                type="tel"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
              <button type="submit">Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
