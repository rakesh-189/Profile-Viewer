const UserDetails = ({details}) => {

var detailsStyle = {
  fontSize: 16,
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: 3,
  textAlign: "center"
}

var detailsStyle2 = {
  fontSize: 12,
  fontFamily: "Arial, Helvetica, sans-serif",
  display: "flex",
  margin: "0px 5px",
  justifyContent: "space-around"
}

var detailsStyle3 = {
  fontSize: 12,
  fontFamily: "Arial, Helvetica, sans-serif",
  display: "flex",
  marginTop: -25,
  // marginLeft: 5,
  justifyContent: "space-around"
}

var textStyle = {
  fontSize: 14
}

var container = {
  width: 125,
  height: 50,
}

  return (
    <div>
      <h3 style={detailsStyle}>{details.name}</h3>

     <div>
        <div style={detailsStyle2}>
        <h3 style={textStyle}>Followers</h3>
        <h3 style={textStyle}>Following</h3>
        </div>

        <div style={detailsStyle3}>
        <h3 style={{marginLeft: -15}}>{details.followers}</h3>
        <h3 style={{marginLeft: -20}}>{details.following}</h3>
        </div>
      
      </div>

      

      </div>
  )
}
export default UserDetails