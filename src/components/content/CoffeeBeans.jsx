import React from 'react';

/* 
    Image import
    - Best practice according to stackoverflow!
*/
import beans from '../../img/beans.jpg';

const CoffeeBeans = () => (
    <div className="content__coffeeBeans">
        <div className="content__coffeeBeans-intro text-justify">
            <h1>Coffee</h1>
            <p>We work with specialty coffee from current crops which is carefully roasted. Our coffee is fruity, juicy and never boring. We bring you the best from leading european specialty roasteries, currently mostly from Square Mile Coffee Roasters, a multi award winning coffee roasting company based in East London.</p>
            <p>You can currently buy these beans in 350g bags</p>
        </div>
        <div className="content__coffeeBeans-cardContainer">
            <div className="content__coffeeBeans-card">
                <h2>Quejina (Guatemala)</h2>
                <img src={beans} alt="beans-image" />
                <p>redcurrant/honeysuckle/juicy</p>
                <p>Fruity redcurrant and sweet honeysuckle flavours. An incredibly juicy coffee which we struggled to decide on the right berry descriptor, but raspberry, blackberry and blueberry were also in the running!</p>
            </div>
            <div className="content__coffeeBeans-card">
                <h2>Mormora (Ethiopia)</h2>
                <img src={beans} alt="beans-image" />
                <p>blackberry/orange/silky</p>
                <p>Fruity, sweet notes of dried mango, strawberry and passionfruit sit alongside a delicious creamy mouthfeel making this a tasty summer Ethiopian, hot or cold.</p>
            </div>
            <div className="content__coffeeBeans-card">
                <h2>Kamwangi (Kenya)</h2>
                <img src={beans} alt="beans-image" />
                <p>blackberry/orange/silky</p>
                <p>This is one fruit filled espresso! From citrus fruits, such as orange, grapefruit and clementine, to berries of the black, blue and red variety, this is fruit turned up to 11, all wrapped up in a silky smooth body.</p>
            </div>
            <div className="content__coffeeBeans-card">
                <h2>Decaf Espresso (El Salvador)</h2>
                <img src={beans} alt="beans-image" />
                <p>caramel/apple/cinnamon</p>
                <p>This is a single origin espresso from San Carlos in El Salvador, think sweet caramel and apple notes alongside sprinklings of cinnamon in the finish.</p>
            </div>
        </div>
    </div>
)

export default CoffeeBeans;