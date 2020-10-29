import React, {Component} from 'react';
import {cartMenu} from '../../actions';
import ItemDetails from '../itemDetails';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';


class CartDetails extends Component {
    componentDidMount() {
        
        const {RestoService, cartId, cartMenu} = this.props;
        
            RestoService.getMenuCart(cartId)
            
                .then(res => cartMenu(res))
    }
    render() {
        
        if (!this.props.cart) {
            return (
                <div>
                    Choose please element
                </div>
            )
        }
        const {title, url, category, price} = this.props.cart;
        return (
            <div className="cart">
                <div className="cart__list">
                    <div className="cart__item">
                        <img className="cart__item-img" src={url}></img>
                        <div className="cart__item-title">{title}</div>
                        <div className="cart__item-title">Category: <span>{category}</span></div>
                        <div className="cart__item-price">Price: <span>{price}$</span></div>
                    </div>
                    <button className="menu__btn">Add to cart</button>
                </div>
            </div>
        );
    }  
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchtoProps = {
    cartMenu
}

export default WithRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(withRouter(CartDetails)));
