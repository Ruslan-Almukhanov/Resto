import React, {Component} from 'react';
import Spinner from '../spinner/spinner';

class itemDetails extends Component {
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
            
        )

    }
}

export default itemDetails;