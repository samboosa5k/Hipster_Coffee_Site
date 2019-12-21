import React from 'react';
import PropTypes from 'prop-types';

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

const Content = ( {pageContent} ) => {
    switch(pageContent){
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

Content.propTypes = {
    pageContent: PropTypes.string.isRequired,
}

export default Content;