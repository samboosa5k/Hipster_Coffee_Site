import React from 'react';

/* 
    Image import
    - Best practice according to stackoverflow!
*/
import counter from '../../img/counter.jpg';

const Home = () => (
    <div className="content__home">
        <div className="content__home-intro">
            <h1>GENERIC HIPSTER COFFEE</h1>
            <h2>SPECIALTY COFFEE, FRESH FOOD & LOCAL COMMUNITY</h2>
        </div>
        <img className="content__home-introImage" src={counter} alt="image of store" />
        <div className="content__home-detailsContainer">
            <div className="content__home-details">
                <h3>OPENING HOURS</h3>
                <p>sunday - thursday: 8:00 - 23:00</p>
                <p>friday - saturday: 8:00 - 1:00</p>
            </div>
            <div className="content__home-details">
                <h3>BOOK A TABLE</h3>
                <p>Call +1 415-321-4567</p>
            </div>
            <div className="content__home-details">
                <h3>ADDRESS</h3>
                <p>321 Ivy St.</p>
                <p>San Francisco, CA 94102</p>
            </div>
        </div>
       
        <div className="content__home-mapContainer">
            <iframe className="content__home-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20491.70456077188!2d14.43006869573553!3d50.0588888197845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948c1fd32d67%3A0x39779423fbf369cb!2sStarbucks!5e0!3m2!1snl!2scz!4v1568967878356!5m2!1snl!2scz" frameborder="0" allowfullscreen=""></iframe>
        </div>
    </div>
)

export default Home;