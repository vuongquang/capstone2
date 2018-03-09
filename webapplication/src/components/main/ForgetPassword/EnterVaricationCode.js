import React, { Component } from 'react';
import { checkLengthInput } from '../../../constraints/InputValidation'
export default class EnterVaricationCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtVaricationCode: '',
            formError: {
                txtVaricationCode: '',
            }
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Ngan mat o
        const { txtVaricationCode } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtVaricationCode: checkLengthInput(txtVaricationCode,5),
                }
        },
            () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {
                    if (formError[i] === '')
                        isOkay = true
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    this.props.onNextStep(1)
                }
            }
        )
        
    }

    render() {
        const { positionProgress, onNextStep } = this.props;
        return (
            <div
                style={{
                    display: positionProgress === 0 ? '' : 'none'
                }}
                class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Forget Account</h3>
                </div>
                <div class="panel-body">

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <p>A code have just send for you. Please Check your email.</p>
                            <p>Your code will be expirated after closing this website.</p>
                            <p>Please don't close this website</p>
                            <input
                                name="txtVaricationCode"
                                value={this.state.txtVaricationCode}
                                onChange={this.handleChange}
                                type="text"
                                class="form-control"
                                placeholder="Enter your account" />
                            <p class ="text-danger">{this.state.formError.txtVaricationCode}</p>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>

                </div>
            </div>
        )
    }
};
