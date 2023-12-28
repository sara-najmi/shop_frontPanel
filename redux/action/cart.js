import * as Types from '../constants/actionTypes'
import storage from '../../util/localStorage';

export const addToCart = product => dispatch => {
    if(!localStorage.getItem("token")){
        return window.location.href = "/page-login"
    }

    const response = fetch("http://localhost:8080/api/cart/add-to-cart", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                userId : JSON.parse(localStorage.getItem("token")).user.id,
                productId : product.id,
                count : 1
            }), // body data type must match "Content-Type" header
          }).then(response => response.json())
          .then(result => {
          });
    dispatch({
        type: Types.ADD_TO_CART,
        payload: { product } 
    })
}


export const deleteFromCart = productId => dispatch => {
    const response = fetch("http://localhost:8080/api/cart/delete-from-cart", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            userId : JSON.parse(localStorage.getItem("token")).user.id,
            productId : productId,
            count : -1
        }), // body data type must match "Content-Type" header
      }).then(response => response.json())
      .then(result => {
      });
    dispatch({
        type: Types.DELETE_FROM_CART,
        payload: { productId }
    })
}

export const increaseQuantity = productId => dispatch => {
    const response = fetch("http://localhost:8080/api/cart/add-to-cart", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                userId : JSON.parse(localStorage.getItem("token")).user.id,
                productId : productId,
                count : 1
            }), // body data type must match "Content-Type" header
          }).then(response => response.json())
          .then(result => {
          });
    dispatch({
        type: Types.INCREASE_QUANTITY,
        payload: { productId }
    })
}


export const decreaseQuantity = productId => dispatch => {
    const response = fetch("http://localhost:8080/api/cart/add-to-cart", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                userId : JSON.parse(localStorage.getItem("token")).user.id,
                productId : productId,
                count : -1
            }), // body data type must match "Content-Type" header
          }).then(response => response.json())
          .then(result => {
          });
    dispatch({
        type: Types.DECREASE_QUANTITY,
        payload: { productId }
    })
}



export const openCart = () => dispatch => {
    dispatch({
        type: Types.OPEN_CART,
    })
}

export const clearCart = () => dispatch => {
    dispatch({
        type: Types.CLEAR_CART,
    })
}

export const closeCart = () => dispatch => {
    dispatch({
        type: Types.CLOSE_CART,
    })
}



