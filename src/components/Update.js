import { useState } from "react"
import Wrapper from "../styles/UpdateStyle";
import { Link } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

const Update = ({id, updateProfile}) => {

  const [isUpdate, setUpdate] = useState(false);

  var buttonStyle = {
    border: "none",
    background: "#FFF",
    fontSize: 16,
    color: isUpdate ? "blue" : null
  }

  var action = () => {
    setUpdate(!isUpdate)
  }


  return (
    <Wrapper>
       <Link to={`/update-profile/${id}`}>
       <button className="update" onClick={() => updateProfile(id)} style={buttonStyle}>
        <span>
        <i onClick={action} className="fas fa-pencil-alt"></i>
        <span className="text">Update</span>
        </span>
        
        </button>
        </Link>
    </Wrapper>
  )
}
export default Update