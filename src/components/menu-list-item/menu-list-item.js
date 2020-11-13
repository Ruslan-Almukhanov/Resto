import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addToCart} from '../../actions'
import './menu-list-item.scss';
import beef from '../../icons/beef.svg';
import pizza from '../../icons/pizza.svg';
import salads from '../../icons/healthy-eating.svg';

const Icon = styled.img `
    width: 50px;
    height: 50px;
`

class MenuListItem extends Component {
    
    render() {
        const {title, url, category, price, id} = this.props.menuItem;
        const {addToCart} = this.props;
        const renderIcon = (category) => {
            switch (category) {
                case 'salads':
                    return salads
                case 'meat':
                    return beef
                case 'pizza':
                    return pizza
                default:
                    return 'src/images/pizza/svg'
            }
        }
        return (
            <li 
                className="menu__item">
                    <Icon src={renderIcon(category)}/>
                    <Link to={`/${id}`}>
                        <div className="menu__title">{title}</div>
                    </Link>
                    <img className="menu__img" src={url}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span>{this.props.qtty}</div>
                    <button 
                        onClick={ () => addToCart(this.props.menuItem)}
                        className="menu__btn">Add to cart</button>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        qtty: state.items.qtty
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuListItem);