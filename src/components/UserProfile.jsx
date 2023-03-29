import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, sendPasswordReset, storage } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import "~~/components/UserProfile.scss";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [userName, setUserName] = useState("");
  const [userDayOfBirth, setUserDayOfBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  //update
  const [displayName, setDisplayName] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avt, setAvt] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUser();
    setUserName(user?.displayName);
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
          setUserDayOfBirth(doc.data().dayOfBirth);
          setUserEmail(doc.data().email);
          setUserPhoneNumber(doc.data().phoneNumber);
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
    if (!displayName || displayName === user.displayName) {
      errorToast("Không hợp lệ hoặc đã tồn tại");
    } else {
      updateProfile(auth.currentUser, { displayName: displayName })
        .then(() => {
          successToast("Cập nhật thành công");
        })
        .catch((err) => {
          errorToast(err.message);
        });
    }
  };

  // update day of birth
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
    if (!phoneNumber || phoneNumber === userPhoneNumber) {
      errorToast("Không hợp lệ hoặc đã tồn tại");
    } else {
      const docRef = doc(db, "users", userId);
      try {
        await updateDoc(docRef, {
          phoneNumber: phoneNumber,
        });
        fetchUser();
        successToast("Cập nhật thành công");
      } catch (error) {
        errorToast(error.message);
      }
    }
  };
  // update avt
  const updateAvatar = async (e) => {
    e.preventDefault();
    const imgRef = ref(storage, `user avatars/${user.uid}.png`);
    await uploadBytes(imgRef, avt);
    const photoURL = await getDownloadURL(imgRef).catch((err) => {
      errorToast(err.message);
    });
    updateProfile(auth.currentUser, { photoURL })
      .then(() => {
        successToast("Cập nhật thành công");
      })
      .catch((err) => {
        errorToast(err.message);
      });
  };
  // update password
  const updatePassword = (e) => {
    e.preventDefault();
    sendPasswordReset(user.email);
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
                onChange={(e) => setDisplayName(e.target.value)}
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
            <form className="input-field" onSubmit={updatePhoneNo}>
              <label>Số điện thoại</label>
              <input
                defaultValue={userPhoneNumber}
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                pattern="[0]{1}[0-9]{9}"
              />
              <button type="submit">Cập nhật</button>
            </form>
            <form className="input-field" onSubmit={updateAvatar}>
              <label>Ảnh đại diện</label>
              <input
                type="file"
                onChange={(e) => setAvt(e.target.files[0])}
                required
              />
              <button type="submit">Cập nhật</button>
            </form>
            <form className="input-field" onSubmit={updatePassword}>
              <label>Đổi mật khẩu</label>
              <input
                defaultValue={user?.email}
                type="email"
                disabled
              />
              <button type="submit">Gửi yêu cầu</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
