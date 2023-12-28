import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    toggleClick,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">

                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    {/* <Search /> */}
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="search-location">
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg" />
                                                    <span className="pro-count blue">{totalCartItems}</span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-cart">
                                                <a>
                                                    <span className="lable">سبد</span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="/page-account">
                                                <a>
                                                    <img className="svgInject" alt="Nest" src="/assets/imgs/theme/icons/icon-user.svg" />
                                                </a>
                                            </Link>
                                            <Link href="/page-account">
                                                <a>
                                                    <span className="lable ml-0">حساب</span>
                                                </a>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <a>
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                کاربر   
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <a>
                                                                <i className="fi fi-rs-location-alt mr-10"></i>
                                                                Order Tracking
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login">
                                                            <a>
                                                                <i className="fi fi-rs-sign-out mr-10"></i>
                                                                Sign out
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar"}>
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <div className={isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading"}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2 />
                                            <CategoryProduct3 />
                                        </div>
                                        <div className="more_slide_open" style={{ display: "none" }}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                                                                Milks and Dairies
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                                                                Clothing & beauty
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                                                                Wines & Drinks
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                                                                Fresh Seafood
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span> <span className="heading-sm-1">Show more...</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src="/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />

                                <p>
                                    034 - 33333333 <span>ساعات کاری 8:00 - 22:00</span>
                                </p>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
});

export default connect(mapStateToProps, null)(Header);
