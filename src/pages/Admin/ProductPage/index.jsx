import {
  Row,
  Input,
  Table,
  Popconfirm,
  Select,
  Drawer,
  Spin,
  Form,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useEffect, useState } from "react";
import {
  deleteProuctItemAction,
  getCategoryListAction,
  getProductListAction,
  getProductItem,
} from "../../../redux/User/actions";

function ProductPage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});
  const [productSelected, setProductSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const [productDetailForm] = Form.useForm();

  const productList = useSelector((state) => state.productReducer.productList);

  const categoryList = useSelector(
    (state) => state.categoryReducer.categoryList
  );

  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );
  console.log(
    "🚀 ~ file: index.jsx ~ line 27 ~ ProductPage ~ productDetail",
    productDetail
  );

  useEffect(() => {
    dispatch(getProductListAction(filter));
    dispatch(getCategoryListAction({}));
  }, [filter]);

  useEffect(() => {
    if (productSelected) {
      console.log("🚀 ~ file: index.jsx ~ line 51 ~ useEffect ~ productSelected", productSelected)
      dispatch(getProductItem(productSelected));
      productDetailForm.resetFields();
    }
  }, [productSelected]);

  const { Search } = Input;

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Images",
      dataIndex: "imgs",
      key: "imgs",
      render: (_, record) => {
        return <img src={record.imgs[0]} className="product-page__img" />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return <p>${record.price}</p>;
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Row justify="space-between">
          <EditOutlined
            className="table-icon icon-primary"
            onClick={() => {
              setProductSelected(record.id);
              handleUpdateProduct();
              setVisible(true);
            }}
          />
          <Popconfirm
            title={`Are you sure you want to delete this product?`}
            onConfirm={() => dispatch(deleteProuctItemAction(record.id))}
          >
            <DeleteOutlined className="table-icon icon-danger" />
          </Popconfirm>
          <div></div>
        </Row>
      ),
    },
  ];

  const dataSource = productList.data.map((item) => {
    return {
      ...item,
      key: item.id,
    };
  });

  function handleSelect(value) {
    if (value === "") {
      const newFilter = filter;
      delete newFilter.categoryId;
      setFilter({ ...newFilter });
    } else {
      setFilter({ ...filter, categoryId: value });
    }
  }

  function handleUpdateProduct() {
    if (!productDetail.load) {
    }
  }

  return (
    <main className="product-page">
      {!productDetail.load ? (
        <Drawer
          title={productSelected ? "Edit product" : "Add product"}
          placement="right"
          width={500}
          onClose={() => {
            setVisible(false);
            setProductSelected(null);
          }}
          visible={visible}
        >
          {!productDetail.load ? (
            <Form
              form={productDetailForm}
              name="productDetailForm"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 28 }}
              initialValues={
                productSelected && !productDetail.load
                  ? {
                      ...productDetail.data,
                      category: productDetail.data?.category?.name,
                    }
                  : {}
              }
            >
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="category" label="Category">
                <Input />
              </Form.Item>
            </Form>
          ) : (
            ""
          )}
        </Drawer>
      ) : (
        ""
      )}
      <p className="product-page__title">Product management</p>
      <div className="product-page__main">
        <Row justify="space-between" className="product-page__main--top">
          <div></div>
          <Search
            placeholder="input search text"
            allowClear
            className="user-page__main--search"
            enterButton="Search"
            size="large"
            onSearch={(value) => setFilter({ ...filter, q: value })}
          />
          <Select
            defaultValue=""
            className="product-page__main--select"
            onChange={(value) => handleSelect(value)}
          >
            <Select.Option value="">All</Select.Option>
            {categoryList.data.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Row>
      </div>
      <Table
        dataSource={dataSource}
        loading={productList.load}
        columns={tableColumns}
        size="middle"
        pagination={{ defaultPageSize: 8 }}
      />
    </main>
  );
}

export default ProductPage;
