import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../redux/User/actions";
import history from '../../../utils/history';
function BtnAddToCart(props) {
  const dispatch = useDispatch();

  const { id, name, imgs, price, alt, amount, color, size, isDetail } =
    props.product;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  function handleAddToCart() {
    if (userInfo) {
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
        message: "Cập nhật giỏ hàng thành công!",
      });
    } else {
      notification.warning({
        message: "Đăng nhập để thêm vào giỏ hàng!",
      });
      history.push('login')
    }
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
