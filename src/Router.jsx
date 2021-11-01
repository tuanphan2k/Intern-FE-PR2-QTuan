import { Router, Switch } from "react-router-dom";
import history from "./utils/history";
import PATH from "./constants/path";
//layouts
import DefaultLayout from "./layouts/DefaultLayout";
//pages
import UserHomePage from "./pages/User/HomePage";
import UserProductListPage from "./pages/User/ProductListPage";
import UserProductDetailPage from "./pages/User/ProductDetailPage";
import UserProductCartPage from "./pages/User/ProductCartPage";
import UserProductOrderPage from "./pages/User/ProductOrderPage";
//auth-pages
import RegisterPage from "./pages/User/Register";
import LoginPage from "./pages/User/Login";

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path={PATH.HOME} component={UserHomePage} />
        <DefaultLayout
          exact
          path={PATH.PRODUCT}
          component={UserProductListPage}
        />
        <DefaultLayout
          exact
          path={PATH.PRODUCTDETAIL}
          component={UserProductDetailPage}
        />
        <DefaultLayout exact path={PATH.REGISTER} component={RegisterPage} />
        <DefaultLayout exact path={PATH.LOGIN} component={LoginPage} />
        <DefaultLayout exact path={PATH.CART} component={UserProductCartPage} />
        <DefaultLayout
          exact
          path={PATH.ORDER}
          component={UserProductOrderPage}
        />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
