import React from 'react';
import {MainPage, CartPage, CartDetails} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader/>
                <Route path="/" exact component={MainPage}/>
                <Route path="/cart/" exact component={CartPage}/>
                <Route path="/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                                return <CartDetails cartId={id}/>}
                            
                }/>
            </div>
        </Router>
    )
}

export default App;