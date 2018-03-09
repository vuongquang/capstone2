import React, { Component } from 'react';
import { connect } from 'react-redux'
import Information from '../../../components/main/Register/Information'
import { actRegisterProgress } from '../../../actions/LoginAction'
class InformationCTT extends Component {
  render() {
    const { positionProgressBar, onNextProgressBar } = this.props
    return (
      <Information onNextProgressBar={onNextProgressBar} positionProgressBar={positionProgressBar} />
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
export default connect(mapStyleToProps, mapDispatchToProps)(InformationCTT)