import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cart/cartActions";
import { getRandomArbitrary } from "./helper/coreAPICall";
import { formatCurrency } from "./helper/currencyFormatter";

function Cart({ setOpenCart }) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productList.products);
  const cartItemIds = useSelector((store) => store.cart.cartItems);
  const cartProducts =
    products && products.filter((product) => cartItemIds.includes(product.id));

  useEffect(() => {
    // When comp renders, meaning cart is open, scroll to top of window
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //this -> window object
    //NB: If this componet is open, and user scrolls down, close it.
    //If open and user scrolls up, do nothing, that is leave it open!
    window.onscroll = function () {
      this.scrollY > this.oldScroll && setOpenCart(false);
      this.oldScroll = this.scrollY;
    };
  }, [setOpenCart]);

  return (
    <div
      className={`absolute w-[35rem] h-min top-0.5 right-0 italic cart-component`}
    >
      <div className={`my-4 mx-2 space-y-2`}>
        <div className={`w-full h-full flex justify-between space-y-4`}>
          <table className={`w-full h-min gap-8 `}>
            <thead className={` text-left`}>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className={`text-left`}>
              {cartProducts && cartProducts.length > 0
                ? cartProducts.map((product, i) => (
                    <tr key={i.toString()}>
                      {/* product name  */}
                      <td>{product.name}</td>
                      {/* product price  */}
                      <td>${product.price}</td>
                      {/* product quantity  */}
                      <td>
                        <select name="qty" className={`qty-select`}>
                          {/* logic for should be replaced with product qty from backend */}
                          {[...Array(5)].map((_, i) => (
                            <option
                              key={i.toString()}
                              value={Number(i + 1)}
                              className={`bg-white text-inherit outline-none`}
                            >
                              {Number(i + 1)}
                            </option>
                          ))}
                        </select>
                      </td>
                      {/* action: allow user to remove item from cart  */}
                      <td>
                        <button
                          onClick={() =>
                            dispatch(removeItemFromCart(product.id))
                          }
                        >
                          {/* the remove-from-cart-icon is a custom taiwind class defined in the config file */}
                          <span
                            className={`material-icons  remove-from-cart-icon`}
                          >
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>

        <div className={`w-full h-full flex justify-end  pt-10 pr-[45px]`}>
          {/* // to be changed */}
          <div className="text-md font-bold px-2 py-2 bg-amber-100/10  text-amber-600 rounded-lg align-middle">
            {cartProducts && cartProducts.length > 0
              ? `Total Price: ${formatCurrency(
                  calculateTotalprice(cartProducts)
                )}`
              : `Cart is Empty!`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

function calculateTotalprice(products) {
  let itemPrice = 0;
  let itemPrices = [];
  for (const product of products) {
    itemPrice += product.price * Math.floor(getRandomArbitrary(1, 3)); // getRandomArbitrary is used for getting qty for testing. Should come from user selection
    itemPrices.push(itemPrice);
  }
  return itemPrices.reduce((a, b) => a + b, 0);
}
