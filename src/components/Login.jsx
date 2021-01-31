import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from 'src/components/LoginForm';
import ResetPasswordForm from 'src/components/ResetPasswordForm';
import Container from 'src/components/common/container';
import Section from 'src/components/common/section';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Login extends Component {

    state = {
        popupOpen: null
    }

    componentDidUpdate(prevProps, prevState) {

        const popupOpenPrev = prevState.popupOpen;
        const popupOpenCurrent = this.state.popupOpen;

        if (popupOpenCurrent === popupOpenPrev && popupOpenPrev === false) {
            this.setState({
                popupOpen: null
            })
        }
    }

    handlePopupOpen() {

        const { popupOpen } = this.state;

        if (popupOpen === null) return null;

        return false;

    }

    handleResetPasswordSubmit() {

        this.setState({
            popupOpen: false
        })
    }

    render() {
        return (
            <main className="login">

                <Section>
                    <Container>

                        <h1 className="text-center">Login</h1>

                        <div className="container-narrow mx-auto">
                            <LoginForm />
                        </div>

                        <div className="container-narrow mx-auto d-flex justify-content-center py-5">
                            <Popup
                                open={this.handlePopupOpen()}
                                trigger={<Link to='#'>Reset Password</Link>}
                                modal={true}
                            >

                                <div className="container-narrow mx-auto p-5">

                                    <h5 className="text-center pb-4">Enter your email to reset your password</h5>

                                    <ResetPasswordForm
                                        onSubmit={() => this.handleResetPasswordSubmit()}
                                    />
                                </div>

                            </Popup>
                        </div>

                    </Container>
                </Section>

            </main>
        );
    }
}

export default Login;

