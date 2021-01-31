import React from 'react';

const Button = ({ buttonLabel, classList, ...rest }) => {

    return (
        <button
            className={'btn ' + classList}
            {...rest}
        >{buttonLabel}</button>
    );
}

export default Button;