import "./styles.scss";
import TitlePage from "../../../components/User/TitlePage";
import CartItem from "../../../components/User/CartItem";
import { Button, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItemItemAction,
  increaseCartItemAction,
  removeFromCartAction,
} from "../../../redux/User/actions";

function ProductCartPage() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  function totalPrice() {
    let total = 0;
    cartList.data.forEach((item) => {
      total +=
        (item.price +
          (item.color.price ? item.color.price : 0) +
          (item.size.price ? item.size.price : 0)) *
        item.amount;
    });

    return total.toLocaleString();
  }

  function handleDeleteCart(index, amount) {
    dispatch(removeFromCartAction({ index, amount }));
  }

  function increaseCartItem(index, amount) {
    dispatch(increaseCartItemAction({ index, amount }));
  }

  function decreaseCartItem(index, amount) {
    dispatch(decreaseCartItemItemAction({ index, amount }));
  }

  return (
    <main className="container-1 cart-page">
      <TitlePage title="Cart Page" />
      <section className="cart-page__main">
        <div className="main__content">
          {cartList.data.length < 1 ? (
            <p className="main__content--not-item">No items found in cart</p>
          ) : (
            cartList.data.map((item, index) => (
              <CartItem
                key={index}
                product={{ ...item, cartIndex: index }}
                handleDeleteCart={handleDeleteCart}
                increaseCartItem={increaseCartItem}
                decreaseCartItem={decreaseCartItem}
              />
            ))
          )}
        </div>
        <div className="main__total">
          <div className="main__total--content">
            <p>Total:</p>
            <p>${totalPrice()}</p>
          </div>
          <Row justify="center">
            <Button type="primary" size="large">
              {cartList.data.length < 1
                ? "Cart is empty, go to home"
                : userInfo
                ? "Make a payment"
                : "Sign in to pay"}
            </Button>
          </Row>
        </div>
      </section>
    </main>
  );
}

export default ProductCartPage;
