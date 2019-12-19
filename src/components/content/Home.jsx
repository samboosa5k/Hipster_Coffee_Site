import React from 'react';

const Home = () => (
    <div className="content__home">
        <div className="content__home-intro">
            <h1>GENERIC HIPSTER COFFEE</h1>
            <h2>SPECIALTY COFFEE, FRESH FOOD & LOCAL COMMUNITY</h2>
        </div>
        <div className="content__home-introImage">
            Image of store
        </div>
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
        <div className="content__home-map">Map</div>
    </div>
)

export default Home;