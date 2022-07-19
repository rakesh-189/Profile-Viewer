import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import  {Form, ProfileHome, UpdateProfile} from './components';

export const NODE_APP_URL = "http://localhost:5000/api/v1/profiles";

 class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formValues: {},
      isUpdate: false,
    }
  }

  componentDidMount = async () => {
    const response = await fetch(NODE_APP_URL);
    const proData = await response.json();
    this.setState({
     data: proData.profiles
    }, () => console.log(this.state.data))
   }


   updateProfile = (id) => {
    this.setState({
      isUpdate: true
    })
    console.log(`Profile with ID ${id} updated`);
   }

   deleteProfile = async (id) => {
    await fetch(NODE_APP_URL+"/"+id, { method: 'DELETE' })
    .then(  
      this.setState({
        data: this.state.data.filter(fix => fix._id !== id)
      })
    )   
    console.log(`Profile ID: ${id} deleted`);
   }



   handleChange = (e) => {
    const {name, value, type} = e.target;
    let {formValues} = this.state;
    formValues = {...formValues, [name]: type === "number" ? parseInt(value) : value};
    this.setState({formValues});
  };


  onSubmit = (e) => {
    const {formValues, isUpdate} = this.state;
    e.preventDefault();
    console.log(formValues);

    if(isUpdate) {
      console.log('In the update mode of form Submit Handler');
    }
 
    else {
      fetch(NODE_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(res => {
      this.setState({ data: this.state.data.push(res)})
    })
  
      // formValues: {}
  
      window.location = "/";
    }

   
      
  }

  
 render() {
    return (
      <BrowserRouter>
        <Routes>

          <Route index element={<ProfileHome profiles={this.state.data} updateHandler={this.updateProfile}
           deleteHandler={this.deleteProfile} />} />
          <Route path='/add-profile' element={<Form title="Add Profile" 
          handleChange={this.handleChange} isUpdate={this.state.isUpdate} submitHandler={this.onSubmit}/>} />
          <Route path='/update-profile/:id' element={<Form title="Update Profile" 
          handleChange={this.handleChange} isUpdate={this.state.isUpdate} submitHandler={this.onSubmit}/>}/>

         </Routes>
      </BrowserRouter>
      
      
    )
  }
}



export default App;
