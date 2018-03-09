import React, { Component } from 'react';
import { checkEmail } from '../../../constraints/InputValidation'
export default class ForgetAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtEmail: '',
            formError: {
                txtEmail: '',
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
        const {txtEmail} = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtEmail: checkEmail(txtEmail),
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
                    this.props.onNextStep(0)
                }
            }
        )
        
    }

    render() {
        const { positionProgress, onNextStep } = this.props;
        return (
            <div
                style={{
                    display: positionProgress === -1 ? '' : 'none'
                }}
                class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Forget Account</h3>
                </div>
                <div class="panel-body">

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="">Enter your email and we will help you find you account</label>
                            <input
                                name="txtEmail"
                                value={this.state.txtEmail}
                                onChange={this.handleChange}
                                type="text"
                                class="form-control"
                                placeholder="Enter your account" />
                            <p class ="text-danger">{this.state.formError.txtEmail}</p>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>

                </div>
            </div>

        )
    }
};
