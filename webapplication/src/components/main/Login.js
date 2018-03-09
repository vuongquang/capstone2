import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {checkEmail,checkLengthInput} from '../../constraints/InputValidation'
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtEmail: '',
            txtPassword: '',
            formError: {
                txtEmail: '',
                txtPassword: '',
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
        const { txtEmail,txtPassword } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtEmail: checkEmail (txtEmail),
                    txtPassword: checkLengthInput(txtPassword,8),
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
                    alert ('dang nhap thanh cong')
                }
            }
        )
        
    }
    render() {
        const { numberSwitch } = this.props
        return (
            <form onSubmit ={this.handleSubmit}>
                <legend class="text-center" 
                    style={{fontSize:35}}><strong>Login to your site</strong></legend>
                <div class="form-group">
                    <label for="">Email</label>
                    <input 
                        name="txtEmail"
                        value={this.state.txtEmail}
                        onChange={this.handleChange}
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Username or Email" 
                        />
                    <p class ={'text-danger'}>{this.state.formError.txtEmail}</p>
                </div>

                <div class="form-group">
                    <label for="">Password</label>
                    <input
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={this.handleChange}
                        type="password" 
                        class="form-control" 
                        placeholder="Enter Password" />
                    <p class ={"text-danger"}>{this.state.formError.txtPassword}</p>
                </div>

                <div class="checkbox">
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                </div>
                <Link to="EditPassword">Forget account</Link> <br /> <br />
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

        )
    }
};
