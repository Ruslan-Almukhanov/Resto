import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {withRouter} from 'react-router-dom';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Error from '../error';
import './menu-list.scss';
import Spinner from '../spinner/spinner';

class MenuList extends Component {

    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested} = this.props;
        menuRequested();
        
            RestoService.getMenuItems()
        // try {
            .then(res => menuLoaded(res))
        // } catch {
        //     menuError();
        // }
        
    }

    render() {
    const {menuItems, loading, error, qtty} = this.props;
    // if (error) {
    //     return <Error/>
    // }
    if (loading) {
        return <Spinner/>
    }
        return (
            <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem                         
                                key={menuItem.id} 
                                menuItem={menuItem}/>
                })
            }
            </ul>
        )
    }
};

const mapStatetoProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchtoProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(withRouter(MenuList)));