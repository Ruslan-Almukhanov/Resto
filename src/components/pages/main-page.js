import React from 'react';
import MenuList from '../menu-list';
import {withRouter} from 'react-router-dom';

const MainPage = () => {
    return (
        <MenuList/>
    )
}

export default withRouter(MainPage);
