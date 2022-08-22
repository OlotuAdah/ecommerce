import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cart/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productList.products);
  const cartItemIds = useSelector((store) => store.cart.cartItems);
  const cartProducts =
    products && products.filter((product) => cartItemIds.includes(product.id));
  console.log(cartProducts);
  return (
    <div
      className={`absolute w-[35rem] h-min top-2 right-0 italic cart-component`}
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
                        <select
                          name="qty"
                          className={`bg-white text-inherit outline-none`}
                        >
                          {/* logic for should be replaced with product qty from backend */}
                          {[...Array(5)].map((_, i) => (
                            <option
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

        <div className={`w-full h-full flex justify-between px-1`}>
          <div>Total: $24.00</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
