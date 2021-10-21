import { Row, Rate } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./styles.scss";

function ProductItem(props) {
  const {
    id,
    name,
    categoryId,
    discount,
    isNew,
    description,
    imgs,
    price,
    rate,
    alt,
  } = props.product;

  return (
    <div className="product-item">
      <div className="product-item__img">
        <img src={imgs[0]} alt={alt} />
        <div className="product-item__img--discount"> {`${discount}%`}</div>
        {isNew ? <div className="product-item__img--new"> New </div> : ""}
        <ul className="product-item__toolbox">
          <li>
            <HeartOutlined />
          </li>
          <li>
            <ShoppingCartOutlined />
          </li>
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </div>
      <div className="product-item__content">
        <h3 className="product-item__content--name">{name}</h3>
        <Row>
          <Rate disabled defaultValue={rate} />
          <span className="product-item__comment">12 comments</span>
        </Row>
        <p className="product-item__content--price">{`$${price}`}</p>
      </div>
    </div>
  );
}

export default ProductItem;
