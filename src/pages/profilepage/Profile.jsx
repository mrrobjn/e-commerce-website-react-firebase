import {useEffect} from "react";
import { Outlet } from "react-router-dom";
import "./Profile.scss";
import ProfileMenu from "../../components/profilemenu/ProfileMenu";
const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="profile-section" style={{ paddingTop: 150 }}>
        <div className="profile-container">
          <ProfileMenu />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Profile;
