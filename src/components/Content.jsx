import React from 'react';

/* 
    Component imports: Content
*/
import Home from './content/Home.jsx';
import ShopMenu from './content/ShopMenu.jsx';
import CoffeeBeans from './content/CoffeeBeans.jsx';
import OurStory from './content/OurStory.jsx';

/* 
    Notes:
    - Return different content based on routeProps pathname!
    - Beautiful!
*/

const Content = ( props ) => {
    switch(props.pageContent){
        case "/":
            return <Home />;
            break;
        case "/shopMenu":
            return <ShopMenu />;
            break;
        case "/coffeeBeans":
            return <CoffeeBeans />;
            break;
        case "/ourStory":
            return <OurStory />;
            break;
        default:
            return <Home />;
            break;
    }
}

export default Content;