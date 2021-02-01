import React, { Component } from 'react';
import Socket from 'simple-websocket';
import Container from 'src/components/common/container';
import Section from 'src/components/common/section';
import LatestPrice from 'src/components/LatestPrice'

class Home extends Component {

    // hardcoded state as websocket does not seem to be working
    state = {
        price: null,
        dt: null
    }

    componentDidMount() {

        var socket = new Socket('ws://stream.tradingeconomics.com/?client=guest:guest')

        socket.on('connect', () => {

            socket.send('{"topic": "subscribe", "to": "EURUSD:CUR"}')
        })

        socket.on('data', (response) => {

            const data = JSON.parse(response);

            const { dt, price } = data;

            if (!dt || !price) return;

            this.setState({
                price,
                dt
            })

        })

    }


    render() {

        const { price, dt } = this.state;

        return (
            <div className="home">

                <Section>
                    <Container>

                        <div className="d-block mx-auto">
                            <LatestPrice
                                price={price}
                                time={dt}
                            />
                        </div>

                    </Container>
                </Section>

            </div>

        );
    }
}

export default Home;