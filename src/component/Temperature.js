import React from 'react';
import './Temperature.css';
import PropTypes from 'prop-types';
import { useState } from 'react'

const Temperature = () => {
    const [tempCount, tempSet] = useState(70);

    const tempIncrease = () => {
        if (tempCount < 75) {
            tempSet(tempCount + 1);
        }else {
            alert('It is hot outside.')
        }
    };

    const tempDecrease = () => {
        if (tempCount > 32) {
            tempSet(tempCount - 1);
            
        }else {
            alert('It is Freezing temperature!')
        }
    };

    

    // const backgroundColor = () => {
    //     if (tempCount > 80) {
    //         color = red;
    //     }else if (tempCount > 70) {
    //         color =orange; 
    //     }else if (tempCount > 60) {
    //         color =yellow;
    //     }else if (temCount > 50) {
    //         color=green;
    //     }else {
    //         color=teal; 
    //     };
    // };

    // const backgroundColor = isBackgroundRed ? 'green' : 'red';
    // return (
    //     <div className={isBackgroundRed ? 'red': 'orange'} />
    // )

    return (
        <div className='main_div'>
            <div className='center-div'>
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



