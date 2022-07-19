import { useState } from "react";
import Wrapper from "../styles/FollowStyle";


const Follow = () => {

  const [isFollowing, setFollowing] = useState(false);

  var buttonStyle = {
    border: "none",
    background: "#FFF",
    fontSize: 16,
    color: isFollowing ? "blue" : null
  }

  var icon = isFollowing ? "check" : "plus";

  var action = () => {
    setFollowing(!isFollowing);

    var msg = isFollowing ? "Unfollowed" : "Followed";
    console.log(msg);
  }

  return (
    <Wrapper>
   <button className="follow" onClick={action} style={buttonStyle}>
   <span>
    <i className={`fa-solid fa-user-${icon}`}></i>
   <span className="text">{isFollowing ? "Unfollow" : "Follow"}</span>
   </span>
    </button>
   
    </Wrapper>
  )
}
export default Follow