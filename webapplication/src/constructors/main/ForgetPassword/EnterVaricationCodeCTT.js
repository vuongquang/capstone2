import React, { Component } from 'react';
import EnterVaricationCode from '../../../components/main/ForgetPassword/EnterVaricationCode'
import {connect} from 'react-redux'
import {actForgetPassword} from '../../../actions/LoginAction'
class EnterVaricationCodeCTT extends Component {
  render() {
    const {positionProgress, onNextStep} = this.props;
    return (
      <EnterVaricationCode positionProgress= {positionProgress} onNextStep={onNextStep}/>
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

export default connect (mapStyleToProps,mapDispatchToProps)  (EnterVaricationCodeCTT)
