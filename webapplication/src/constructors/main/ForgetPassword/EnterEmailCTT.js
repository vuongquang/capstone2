import React, { Component } from 'react';
import EnterEmail from '../../../components/main/ForgetPassword/EnterEmail'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
class EnterEmailCTT extends Component {
  render() {
    const {positionProgress, onNextStep} = this.props;
    return (
      <EnterEmail positionProgress= {positionProgress} onNextStep={onNextStep} />
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

export default connect (mapStyleToProps,mapDispatchToProps)  (EnterEmailCTT)
