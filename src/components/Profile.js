import Avatar from "./Avatar";
import GetConnected from "./GetConnected";
import UserDetails from "./UserDetails";
import Wrapper from "../styles/ProfileStyle";
import { NODE_APP_URL } from "../App";

const Profile = ({ _id, name, image, followers, following, updateProfile, deleteProfile }) => {
  var profileStyle = {
    display: "inline-block",
    margin: "auto",
    height: 300,
    width: 200,
    padding: 0,
    backgroundColor: "#FFF",
    WebkitFilter: "drop-shadow(0px 0px 5px #555)",
    filter: "drop-shadow(0px 0px 5px #555)",
  };

  const details = {
    name: name,
    followers: followers,
    following,
    following,
  };



  return (
    // <div style={profileStyle}>
    <Wrapper>
      <div className="card">
        <button className="delete" onClick={() => deleteProfile(_id)}>
          <span className="show-delete">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </button>
        <Avatar image={image} />
        <UserDetails details={details} />
        <GetConnected id={_id} updateProfile={updateProfile} />
      </div>
    </Wrapper>
  );
};
export default Profile;
