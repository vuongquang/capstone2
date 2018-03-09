import React, { Component } from 'react';
import Login from '../../components/main/Login'
import {connect} from 'react-redux'
class LoginCTT extends Component {
  render() {
    return (
        <Login/>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
  }
}



export default connect (mapStyleToProps,null) (LoginCTT)
