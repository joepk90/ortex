import React, { Component } from 'react';
import moment from 'moment';

class LatestPrice extends Component {

    state = {}

    renderTime() {
        const { time } = this.props;

        if (!time) return '';

        const timeString = moment(time).format('dddd MMMM Do YYYY, h:mm:ss a');

        if (!timeString) return '';

        return (
            <p className="latest-price__time">{timeString}</p>
        )
    }

    renderPrice() {

        const { price } = this.props;

        if (!price) return '';

        return (
            <p className="latest-price__price">${price}</p>
        )

    }

    render() {
        return (
            <div className="latest-price text-center">

                {this.renderPrice()}
                {this.renderTime()}

            </div>
        );
    }
}

export default LatestPrice;