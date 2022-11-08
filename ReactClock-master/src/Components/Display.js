import React from 'react';
import PropTypes from 'prop-types';
import "./style/Display.css";


const Display = (props) => (
    <div>
        <div className="parent">
            <div className="middle">
                <div className="circle">
                    <div> <p> {props.time} <br /> {props.date} </p> </div>
                </div>
            </div>
        </div>

    </div >
);

// Display.defaultProps = {
//     date: new Date(),
//     isDateVisible: true
// };

// Display.propTypes = {
//     date: PropTypes.object,
//     isDateVisible: PropTypes.bool
// };

export default Display;