import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./Profile.scss";
import ProfileMenu from "../../components/profilemenu/ProfileMenu";
const Profile = ({users}) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user,loading]);
  return (
    <>
      <section className="profile-section" style={{ paddingTop: 140 }}>
        <div className="profile-container">
          <ProfileMenu users={users}/>
          <Outlet users={users}/>
        </div>
      </section>
    </>
  );
};

export default Profile;
