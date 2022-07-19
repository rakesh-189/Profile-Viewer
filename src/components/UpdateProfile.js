import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form';
import { NODE_APP_URL } from '../App';

class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          gender: '',
          age: 0,
          image: '',
          followers: 0,
          following: 0
        }
    }

    componentDidMount() {

      axios.get(NODE_APP_URL +"/"+ this.props.value.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          gender: response.data.gender,
          age: Number(response.data.age),
          image: response.data.image,
          followers: Number(response.data.followers),
          following: Number(response.data.following),
        })   
      })
      .then(res => console.log(res))
      .catch(function (error) {
        console.log(error);
      })    
    }

  render() {
    console.log(this.props.children);
    return (
      <div>
        Update Profile
      </div>
    )
  }
}

export default UpdateProfile;
