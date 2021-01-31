import LoginForm from 'src/components/LoginForm';
import Container from 'src/components/common/container';
import Section from 'src/components/common/section';

const Login = () => {
    return (
        <main className="login">

            <Section>
                <Container>

                    <h1 className="text-center">Login</h1>

                    <div className="container-narrow mx-auto">
                        <LoginForm />
                    </div>

                </Container>
            </Section>

        </main>
    );
}

export default Login;