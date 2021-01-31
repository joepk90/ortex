import React from 'react';
import Joi from 'joi-browser';
import Form from 'src/components/common/form';

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