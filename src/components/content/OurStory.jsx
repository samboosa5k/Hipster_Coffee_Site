import React from 'react';

/* 
    Image import
    - Best practice according to stackoverflow!
*/
import founder from '../../img/founder.jpg';

const OurStory = () => (
    <div className="content__ourStory">
        <div className="content__ourStory-intro">
            <h1>Our Story</h1>
            <p>GHC started as a project of two friends and passionate baristas, John & Don in 2010.</p>
            <p>Believing as much in the hand of an educated barista as in the innovative equipment of the our ever-growing industry, GHC offers a full spectrum of brewing opportunities – from pour overs to syphon pots to finely executed espresso beverages.</p>
            <p>Each cup of coffee is made with love, precision and care.</p>
        </div>
        <div className="content__ourStory-founderImageContainer">
            <img src={founder} className="content__ourStory-founderImage" alt="founder-image" />
            <p>Pictured: founder John pouring the GHC's 1000th cup of coffee</p>
        </div>
    </div>
);

export default OurStory;
