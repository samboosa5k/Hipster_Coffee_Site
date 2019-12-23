import React,{Suspense, lazy} from 'react';
import PropTypes from 'prop-types';

/* 
    Component imports: Content
*/
// import Home from './content/Home.jsx';
// import ShopMenu from './content/ShopMenu.jsx';
// import CoffeeBeans from './content/CoffeeBeans.jsx';
// import OurStory from './content/OurStory.jsx';

const Home = React.lazy(()=> import('./content/Home.jsx'));
const ShopMenu = React.lazy(()=> import('./content/ShopMenu.jsx'));
const CoffeeBeans = React.lazy(()=> import('./content/CoffeeBeans.jsx'));
const OurStory = React.lazy(()=> import('./content/OurStory.jsx'));

/* 
    Notes:
    - Return different content based on routeProps pathname!
    - Beautiful!
*/

const Content = ( {pageContent} ) => {
    switch(pageContent){
        case "/":
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <Home />
                </Suspense>
            );
            break;
        case "/shopMenu":
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <ShopMenu />
                </Suspense>
            );
            break;
        case "/coffeeBeans":
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <CoffeeBeans />
                </Suspense>
            );
            break;
        case "/ourStory":
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <OurStory />
                </Suspense>
            );
            break;
        default:
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <Home />
                </Suspense>
            );
            break;
    }
}

Content.propTypes = {
    pageContent: PropTypes.string.isRequired,
}

export default Content;