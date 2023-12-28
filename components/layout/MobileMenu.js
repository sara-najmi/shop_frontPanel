import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../util/outsideClick";


const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/logo.svg"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        
                        <div className="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(1)}
                                        >
                                            <i></i>
                                        </span>
                                        <Link href="/shop-fullwidth">
                                            <a>Home</a>
                                        </Link>
                                        <ul>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(2)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                       <Link href="/shop-grid-right">
                                            <a>shop</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 2
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="/shop-fullwidth">
                                                    <a>Shop - Wide</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-cart">
                                                    <a>Shop – Cart</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-checkout">
                                                    <a>Shop – Checkout</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 3
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(5)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Pages</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 5
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="/page-account">
                                                    <a>My Account</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-login-register">
                                                    <a>login/register</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-privacy-policy">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-404">
                                                    <a>404 Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 6
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            
                            <div className="single-mobile-header-info">
                                <Link href="/page-login-register">
                                    <a>Log In / Sign Up </a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                    <a>(+01) - 2345 - 6789 </a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
