import * as React from 'react';
import './Header.scss'

type Props = {};
export const Header = (props: Props) => {
    return (
        <div className='header'>
            <img className="header__logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="Amazon Logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                         Hello
                    </span>
                    <span className="header__optionLineTwo">
                         Sign in
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                         Returns
                    </span>
                    <span className="header__optionLineTwo">
                         & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                         Your
                    </span>
                    <span className="header__optionLineTwo">
                         Prime
                    </span>
                </div>
            </div>
        </div>
    );
};
