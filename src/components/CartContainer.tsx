import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';

export interface ICartState {
    amount: number;
    id: number;
    img: any;
    price: number;
    title: string;
}

export interface ICartContainer {
    cart: ICartState[];
    total: number;
    dispatch: any;
}

const CartContainer = ({ cart = [], total, dispatch }: ICartContainer) => {
    useEffect(() => {
        dispatch({ type: GET_TOTALS });
    }, [cart, dispatch]);

    if (cart.length === 0) {
        return (
            <section className='cart'>
                <header>
                    <h3>What's In Your Pocket?</h3>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className='cart'>
            <header>
                <h3>What's In Your Pocket?</h3>
            </header>
            <article>
                {cart.map((item) => {
                    console.log(item);
                    return <CartItem key={item.id} {...item} />;
                })}
            </article>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={() => dispatch({ type: CLEAR_CART })}>
                    Clear Cart
                </button>
            </footer>
        </section>
    );
};

const mapStateToProps = (store) => {
    const { cart, total } = store;
    return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
