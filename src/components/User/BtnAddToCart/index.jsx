import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../redux/User/actions";
function BtnAddToCart(props) {
  const dispatch = useDispatch();

  const { id, name, imgs, price, alt, amount, color, size, isDetail } =
    props.product;

  function handleAddToCart() {
    dispatch(
      addToCartAction({
        id,
        name,
        imgs,
        price,
        alt,
        amount: amount || 1,
        color: color || {},
        size: size || {},
      })
    );
    notification.success({
      message: 'Cập nhật giỏ hàng thành công!',
    });
  }

  return (
    <>
      {isDetail ? (
        <Button
          type="primary"
          size="large"
          icon={<ShoppingCartOutlined />}
          onClick={() => handleAddToCart()}
        >
          Add to cart
        </Button>
      ) : (
        <li onClick={() => handleAddToCart()}>
          <ShoppingCartOutlined />
        </li>
      )}
    </>
  );
}

export default BtnAddToCart;
