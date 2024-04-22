import React from 'react';

const Slider = ({ value, min, max, step, label, handleChange }) => {
    

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
                defaultValue={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default Slider;