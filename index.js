import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* 
    Component imports: Layout
*/
import Header from './src/components/Header.jsx';
import Content from './src/components/Content.jsx';
import Footer from './src/components/Footer.jsx';

/* 
    Style imports
*/
import './src/Index.scss';

/* 
    Notes:
    - Elegant & simple routing down below
*/

const Index = () => (
    <>
        <Router>
            <Header />
                <Switch>
                <Route path="/" render={( routeProps ) => {
                    return <Content pageContent={routeProps.location.pathname} />;
                    }} />
                </Switch>
            <Footer />
        </Router>
    </>
);

ReactDOM.render( <Index/>, document.getElementById( 'root' ) );