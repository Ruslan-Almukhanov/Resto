import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";
import styled from "styled-components";

import "./cart-table.scss";

const Button = styled.button`
  font-size: 35px;
  background: none;
  color: #fff;
  border: none;
  margin: 5px 10px 0;
`;

const CartTable = ({ items, removeFromCart, addToCart }) => {
  if (items.length === 0) {
    return <div className="order__title">Ваша корзина пуста</div>;
  }

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map(item => {
          const { title, url, priceTotal, id, qtty } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt="Cesar salad"></img>
              <div className="cart__item-title">{title}</div>
              <div>
                <Button onClick={() => removeFromCart(item, 1)}>-</Button>
                <span className="cart__item-price">{qtty}</span>
                <Button onClick={() => addToCart(item)}>+</Button>
              </div>

              <div className="cart__item-price">{priceTotal}$</div>
              <div
                key={id}
                onClick={() => removeFromCart(item)}
                className="cart__close"
              >
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);
