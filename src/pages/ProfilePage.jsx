import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import "~~/pages/ProfilePage.scss";
import ProfileMenu from "../components/ProfileMenu";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";
const Profile = ({setProductFilter,cartItem}) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <>
      <Header setProductFilter={setProductFilter} cartItem={cartItem} />
      <div className="page-container">
        <section className="profile-section">
          <div className="profile-container">
            <ProfileMenu />
            <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
