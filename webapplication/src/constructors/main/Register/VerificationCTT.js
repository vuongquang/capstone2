import React, { Component } from 'react';
import {connect} from 'react-redux'
import Verificaion from '../../../components/main/Register/Verificaion'
import {actRegisterProgress} from '../../../actions/LoginAction'
class VerificationCTT extends Component {
  render() {
    const {positionProgressBar,onNextProgressBar} = this.props
    return (
        <Verificaion onNextProgressBar= {onNextProgressBar} positionProgressBar={positionProgressBar}/>
    )
  }
};

const mapStyleToProps = (state) => {
    return {
      positionProgressBar: state.handleProgressBar
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      onNextProgressBar: (numberProgressBar) => {
        dispatch(actRegisterProgress(numberProgressBar))
      }
    }
}
export default connect (mapStyleToProps,mapDispatchToProps)(VerificationCTT)