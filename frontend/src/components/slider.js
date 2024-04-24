import React from 'react';
import './slider.css';

const Slider = ({ value, min, max, step, label, changeHandler }) => {


    return (
        <div>
            <label htmlFor="sliderInput" >{label}</label>
            <div>
                <input
                    type="range"
                    id="sliderInput"
                    name="sliderInput"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={changeHandler}
                />
            </div>
        </div>
    );
};

export default Slider;