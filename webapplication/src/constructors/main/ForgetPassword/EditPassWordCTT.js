import React, { Component } from 'react';
import EnterPassWord from '../../../components/main/ForgetPassword/EditPassWord'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
class EditPassWordCTT extends Component {
  render() {
    const {positionProgress, onNextStep} = this.props;
    return (
      <EnterPassWord positionProgress= {positionProgress} onNextStep={onNextStep}/>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
    positionProgress: state.handleForgetPasswordProgress
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNextStep: (numberProgress) => {
      dispatch(actForgetPassword(numberProgress))
    }
  }
}

export default connect (mapStyleToProps,mapDispatchToProps) (EditPassWordCTT)
