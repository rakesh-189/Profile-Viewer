const Avatar = ({image}) => {

    var avatarStyle = {
        marginLeft: 25,
        marginTop: 30,
        height: 150,
        width: 150,
        borderRadius: "50%"
    }
  return (
    <div>
    <img style={avatarStyle} src={image} />
    </div>
  )
}
export default Avatar