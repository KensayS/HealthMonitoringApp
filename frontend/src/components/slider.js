import React from 'react';

const Slider = ({ value, min, max, step, label, changeHandler }) => {
    

    return (
        <div>
            <label htmlFor="sliderInput">{label}</label>
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
    );
};

export default Slider;