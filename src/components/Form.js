import FormRow from "./FormRow";

import Wrapper from "../styles/FormStyle";


const Form = ({title, handleChange, isUpdate, submitHandler}) => {

  var iconStyle = {
    position: "relative",
    top: -35,
    right: isUpdate ? -255 : -240,
//     right: -230,
    fontSize: 24,
  }

  return (
   <Wrapper className="full-page">
      
      <form className="form">
      
      <h2>{title}</h2>
      <span style={iconStyle}>
      <i className={`fa-solid fa-user-plus`}></i>
      </span>

      
      <FormRow
            type="text"
            name="name"
            handleChange={handleChange} />

      <FormRow
            type="text"
            name="gender"
            handleChange={handleChange} />

      <FormRow
            type="number"
            name="age"
            handleChange={handleChange} />

      <FormRow
            type="text"
            name="image"
            handleChange={handleChange} 
            labelText="Image (provide URL)"/>
            

      <FormRow
            type="number"
            name="followers"
            handleChange={handleChange} />

      <FormRow
            type="number"
            name="following"
            handleChange={handleChange} />

      <button className="btn btn-block" onClick={submitHandler}>Submit</button>

      </form>
      </Wrapper>
  )
}
export default Form