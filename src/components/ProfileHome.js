import { Component } from "react";
import Form from "./Form";
import Profile from "./Profile";
import { Link } from "react-router-dom";

function ProfileHome({ profiles, updateHandler, deleteHandler }) {
  var headingStyle = {
    color: "black",
    background: "#FFF",
    boxShadow: "3px solid green",
    textAlign: "center",
    marginBottom: 5
  };

  var profilePageStyle = {
    background: "#00a2ed",
    overflowY: "auto",
    display: "grid",
    grid: "350px / auto auto auto auto auto",
    gridGap: 3,
    marginTop: 10
  };

  var buttonStyle = {
    background: "green",
  };

  var addProfile = () => {
    console.log("Add profile");
    <Form />;
  };

  return (
    <div>
      <h1 style={headingStyle}>Profile Viewer</h1>
      <Link to={"/add-profile"}><button style={buttonStyle} onClick={addProfile}>+</button></Link>
       
      <div style={profilePageStyle}>
        {profiles.map((profile) => {
          return (
            <Profile
              key={profile._id}
              _id={profile._id}
              name={profile.name}
              image={profile.image}
              followers={profile.followers}
              following={profile.following}
              updateProfile={updateHandler}
              deleteProfile={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProfileHome;
