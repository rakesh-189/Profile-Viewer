import { useState } from "react"
import Wrapper from "../styles/LikeStyle";


const Like = () => {

  const [isLike, setLike] = useState(false);

  var buttonStyle = {
    border: "none",
    background: "#FFF",
    fontSize: 16,
    color: isLike ? "blue" : null
  }

  var action = () => {
    setLike(!isLike)

    var msg = isLike ? "Uniked" : "Liked";
    console.log(msg);
  }

  var icon = isLike ? "solid" : "regular" 


  return (
    <Wrapper>
       <button className="like" onClick={action} style={buttonStyle}>
        <span>
        <i className= {`fa-${icon} fa-thumbs-up`}></i>
          <span className="text">{isLike ? "Unlike" : "Like"}</span>
        </span>
        </button>
    </Wrapper>
  )
  }
export default Like


 {/* <i className="fa-light fa-thumbs-up"></i> */}