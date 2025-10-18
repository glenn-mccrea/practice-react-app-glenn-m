import ProfileCard from "./ProfileCard";
import "./ProfileContainer.css";

const ProfileContainer = () => (
  <div className="profile-container">
    <ProfileCard
      personName="Katy Smithton"
      age={22}
      bio="Writes awesome Javascript."
    />
    <ProfileCard personName="Charles Claybar" age={35} bio="Works with C++." />
  </div>
);

export default ProfileContainer;
