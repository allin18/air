import React, {useState, useEffect} from 'react';

import './_BeerSlider.scss';
import {BeerSlider} from './_BeerSlider.js';

function ImageComparisonSlider() {

    useEffect(() => {
        new BeerSlider(document.getElementById('slider'));
        return () => {
            // 组件卸载前的清理操作（可选）
        };
    }, []); // 空数组[]意味着这个effect只会在组件挂载时执行一次


    const sliderStyle = {
        borderRadius: 50,
        overflow: 'hidden',
        display: 'block',
    };

    return (
        <div id="slider" className="beer-slider" data-beer-label="before" style={sliderStyle}>
            <img src="images/home/after.png" alt=""/>
            <div className="beer-reveal" data-beer-label="after">
                <img src="images/home/befor.png" alt=""/>
            </div>
        </div>
    );
}

export default ImageComparisonSlider;