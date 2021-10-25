import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Rate, InputNumber, Button, Tabs, Spin } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  getProductItem,
  getProductListAction,
} from "../../../redux/User/actions/product.action";
import TitlePage from "../../../components/User/TitlePage";
import ProductItem from "../../../components/User/ProductItem";
import "./styles.scss";

function ProductDetailPage({ match }) {
  const { TabPane } = Tabs;
  const [sizeSelected, setSizeSelected] = useState({ id: null, price: 0 });
  const [colorSelected, setcolorSelected] = useState({ id: null, price: 0 });
  const productId = parseInt(match.params.id);

  const dispatch = useDispatch();

  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );

  const productSimilarList = useSelector(
    (state) => state.productReducer.productList
  );

  useEffect(() => {
    setcolorSelected({ id: null, price: 0 });
    setSizeSelected({ id: null, price: 0 });
    dispatch(getProductItem(productId));
  }, [productId]);

  useEffect(() => {
    dispatch(
      getProductListAction({
        _page: 1,
        _limit: 6,
        categoryId: productDetail.data.categoryId,
      })
    );
  }, [productDetail.data.categoryId]);

  const images = productDetail.data.imgs || [];
  const [imgShow, setImgShow] = useState(0);

  function renderproductSimilarList() {
    if (!productSimilarList.load) {
      return productSimilarList.data.map((item) => {
        return (
          <Col span={8}>
            <ProductItem product={item} key={item.id} />
          </Col>
        );
      });
    }

    return <Spin />;
  }

  function handleSizeOptions(id) {
    const sizeIndex = productDetail.data.sizeOptions.findIndex(
      (item) => item.id === id
    );

    setSizeSelected({
      id,
      price: productDetail.data.sizeOptions[sizeIndex].price,
    });
  }

  function handleColorOptions(id) {
    const colorIndex = productDetail.data.colorOptions.findIndex(
      (item) => item.id === id
    );

    setcolorSelected({
      id,
      price: productDetail.data.colorOptions[colorIndex].price,
    });
  }

  return (
    <main className="product-detail container-1">
      <TitlePage title={productDetail.data.name} />
      <Row gutter={6}>
        <Col span={12}>
          <Row justify="center" className="product-detail__slider">
            <img
              src={images[imgShow]}
              className="product-detail__slider--show"
            />
            {images.map((item, index) => {
              return (
                <img
                  className="product-detail__slider--item"
                  src={item}
                  key={index}
                  onClick={() => setImgShow(index)}
                  width="120px"
                  height="auto"
                />
              );
            })}
          </Row>
        </Col>
        <Col span={12} className="product-detail__main">
          <div className="main__content">
            <h1>{productDetail.data.name}</h1>
            <Rate disabled defaultValue={4} />
            <span> (12 comments)</span>
            <p className="main__content--price">
              $
              {productDetail.data.price +
                colorSelected.price +
                sizeSelected.price}
            </p>
            <p className="main__content--des">
              {productDetail.data.description}
            </p>
          </div>
          <div className="main__control">
            <Row>
              <Col span={6}>
                {productDetail.data.sizeOptions?.length <= 0 ? (
                  ""
                ) : (
                  <p className="main__control--title">Size</p>
                )}
              </Col>
              <ul className="size__list">
                {productDetail.data.sizeOptions?.map((item) => (
                  <li
                    key={item.id}
                    className={`size__list--item ${
                      item.id === sizeSelected.id ? "active" : ""
                    }`}
                    onClick={() => handleSizeOptions(item.id)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </Row>
            <Row>
              <Col span={6}>
                {productDetail.data.colorOptions?.length <= 0 ? (
                  ""
                ) : (
                  <p className="main__control--title">Color</p>
                )}
              </Col>
              <ul className="color__list">
                {productDetail.data.colorOptions?.map((item) => (
                  <li
                    key={item.id}
                    className={`color__list--item ${item.className} ${
                      item.id === colorSelected.id ? "active" : ""
                    }`}
                    onClick={() => handleColorOptions(item.id)}
                  ></li>
                ))}
              </ul>
            </Row>
            <Row>
              <Col span={6}>
                <p className="main__control--title">Quantity</p>
              </Col>
              <InputNumber defaultValue={1} max={10} min={1} size="large" />
            </Row>
            <Row className="product-detail__btn">
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
              >
                Add to cart
              </Button>
              <Button
                type="primary"
                icon={<HeartOutlined />}
                size="large"
              ></Button>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="product-detail__infor">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Description" key="1">
            <Row>
              <p className="infor__des">{productDetail.data.description}</p>
            </Row>
          </TabPane>
          <TabPane tab="Additional Information" key="2">
            <Row justify="center" className="infor__option">
              <Col span={8}>
                <Row justify="space-between">
                  <p>Size</p>
                  <ul className="infor__option--list">
                    {productDetail.data.sizeOptions?.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </Row>
                <Row justify="space-between">
                  <p>Color</p>
                  <ul className="infor__option--list">
                    {productDetail.data.colorOptions?.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Comments" key="3">
            <Row></Row>
          </TabPane>
        </Tabs>
      </div>
      <div className="product-detail__parity">
        <p>Parity Product</p>
        <Row gutter={16}>{renderproductSimilarList()}</Row>
      </div>
    </main>
  );
}

export default ProductDetailPage;
