import React from 'react';
import Joi from 'joi-browser';
import Form from 'src/components/common/form';
import login from 'src/services/authService';
import { Redirect } from 'react-router-dom';

class LoginForm extends Form {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}

    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    };

    doSubmit = async () => {

        const { data } = this.state;

        login(data)

        console.log('logged in');

        window.location = '/';

    }

    render() {

        return (
            <div>
                <form className="container-narrow" onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}

                    {this.renderButton('Login')}
                </form>

            </div>
        );
    }
}

export default LoginForm;