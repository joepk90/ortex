import React from 'react';
import Joi from 'joi-browser';
import Form from 'src/components/common/form';

class LoginForm extends Form {

    state = {
        data: {
            email: '',
        },
        errors: {}

    };

    schema = {
        email: Joi.string().required().label('Email'),
    };

    doSubmit = async () => {

        const { onSubmit } = this.props;

        onSubmit();
        console.log('email reset...')

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email')}
                    {this.renderButton('Reset')}
                </form>

            </div>
        );
    }
}

export default LoginForm;