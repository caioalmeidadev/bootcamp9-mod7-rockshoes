import React from 'react';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';

import { Container, Cart } from './styles';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rockeshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cartReducer.length
}))(Header);
