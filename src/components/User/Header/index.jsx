import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Row, Input } from "antd";
import { useHistory } from "react-router";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/logo/logo.png";
import { getCategoryListAction } from "../../../redux/User/actions";
import "./styles.scss";

function Header() {
  const [isShowInput, setIsShowInput] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state) => state.categoryReducer.categoryList
  );

  useEffect(() => {
    dispatch(getCategoryListAction({}));
  }, []);

  function renderCategory() {
    if (!categoryList.load) {
      return categoryList.data?.map((item) => (
        <li key={item.id} onClick={() => history.push(`/category/${item.id}`)}>
          {item.name}
        </li>
      ));
    }
  }

  return (
    <>
      <header className="header container-2">
        <Row className="header__section" justify="space-between" align="middle">
          <img src={Logo} alt="logo" onClick={() => history.push("/")} />

          {isShowInput ? (
            <Input
              className="header__search"
              size="large"
              placeholder="Search product..."
            />
          ) : (
            <ul className="header__category">{renderCategory()}</ul>
          )}

          <ul className="header__toolbox">
            <li className="toolbox__item">
              {isShowInput ? (
                <CloseOutlined onClick={() => setIsShowInput(!isShowInput)} />
              ) : (
                <SearchOutlined onClick={() => setIsShowInput(!isShowInput)} />
              )}
            </li>
            <li className="toolbox__item">
              <HeartOutlined />
              <span className="toolbox__item--number">1</span>
            </li>
            <li className="toolbox__item">
              <ShoppingCartOutlined />
              <span className="toolbox__item--number">2</span>
            </li>
            <li className="toolbox__item">
              <UserOutlined />
            </li>
          </ul>
        </Row>
      </header>
    </>
  );
}

export default Header;
