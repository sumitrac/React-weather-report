import React from 'react';
import './Temperature.css';
import PropTypes from 'prop-types';
import { useState } from 'react'

const Temperature = () => {
    const [tempCount, tempSet] = useState(72);
    // const [tempColor, setTempColor] =useState('')

    const tempIncrease = () => {
        if (tempCount + 1 > 75) {
            alert('It is hot outside.');
        }
        tempSet(tempCount + 1); 
        // backgroundColor()

    };

    const tempDecrease = () => {
        if (tempCount - 1 < 32) {
            alert('It is Freezing temperature!');
        }
            tempSet(tempCount - 1);
            // setTempColor(backgroundColor())
    };

    const changeColor = () => {
        if (tempCount > 80) {
            return 'red';
        }else if (tempCount > 70) {
            return 'orange'; 
        }else if (tempCount > 60) {
            return 'yellow';
        }else if (tempCount > 50) {
            return 'green';
        }else {
            return 'teal'; 
        };
    };

    // const backgroundColor = isBackgroundRed ? 'green' : 'red';
    // return (
    //     <div className={isBackgroundRed ? 'red': 'orange'} />
    // )
    const backgroundColor = changeColor();

    return (
        <div className='main_div'>
            <div className={`center-div ${backgroundColor}`}>
                <h2>{tempCount} °F</h2>
                <div className='btn_div'>
                    <button onClick={tempIncrease}>UP</button>
                    <button onClick={tempDecrease}>Down</button>
                </div>
            </div>
            {/* <div className={isBackgroundRed ? 'red': 'orange'} /> */}
        </div>

    );
};
export default Temperature; 



