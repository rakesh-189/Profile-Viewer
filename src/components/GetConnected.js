import Follow from "./Follow"
import Like from "./Like"
import Update from "./Update"

const GetConnected = ({id, updateProfile}) => {

    var iconStyle = {
        display: "flex",
        justifyContent: "space-around",
        marginTop: -7
    }
  return (
    <div style={iconStyle}>
    <Like />
    <Follow />
    <Update id={id} updateProfile={updateProfile} />
   
    </div>
  )
}
export default GetConnected