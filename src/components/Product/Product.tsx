// @flow
import * as React from 'react';
import './Product.scss'


type Props = {};
export const Product = (props: Props) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.96</strong>
                </p>
                <div className="product__rating">

                </div>
                <img src="" alt=""/>
                <button>Add to basket</button>
            </div>
        </div>
    );
};
