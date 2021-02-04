import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

const Button = ({clickOnBtn}) => {
    return (
        <button type="button" onClick={clickOnBtn} className="Button">Load More</button>
    )
}

Button.propTypes = {
    clickOnBtn: PropTypes.func.isRequired,
}

export default Button;

