import { Row, Col, Popconfirm } from "antd";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./styles.scss";

function CartItem(props) {
  const { name, imgs, price, alt, size, color, amount, cartIndex } =
    props.product;

  const handleDeleteCart = props.handleDeleteCart;
  const increaseCartItem = props.increaseCartItem;
  const decreaseCartItem = props.decreaseCartItem;

  return (
    <Row className="cart-item">
      <Col className="cart-item__img" span={4}>
        <img src={imgs[0]} alt={alt} />
      </Col>
      <Col span={20}>
        <div className="cart-item__content">
          <p className="cart-item__content--name">{name}</p>
          <div className="cart-item__toolbox">
            <p>
              $
              {((price +
                (size.price ? size.price : 0) +
                (color.price ? color.price : 0)) *
                amount).toLocaleString()}
            </p>
            <div className="toolbox__handle">
              <MinusSquareOutlined
                disabled={amount === 1 ? true : false}
                onClick={() => {
                  if (amount > 1) {
                    decreaseCartItem(cartIndex, amount - 1);
                  }
                }}
              />
              <div className="toolbox__handle--amount">{amount}</div>
              <PlusSquareOutlined
                onClick={() => increaseCartItem(cartIndex, amount + 1)}
              />
            </div>
            <div className="toolbox__remove">
              <Popconfirm
                onConfirm={() => {
                  handleDeleteCart(cartIndex);
                }}
                title="Do you agree to remove this product from the order?"
              >
                <DeleteOutlined />
              </Popconfirm>
            </div>
          </div>
          <div className="cart-item__option">
            <p>Size: {size.title ? size.title : "Default"}</p>
            <p>Color: {color.title ? color.title : "Default"}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CartItem;
