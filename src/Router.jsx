import { Router, Switch } from "react-router-dom";
import history from "./utils/history";
import PATH from "./constants/path";
//layouts
import DefaultLayout from "./layouts/DefaultLayout";
import PivateLayout from "./layouts/PrivateLayout";
//pages
import UserHomePage from "./pages/User/HomePage";
import UserProductListPage from "./pages/User/ProductListPage";
import UserProductDetailPage from "./pages/User/ProductDetailPage";
import UserProductCartPage from "./pages/User/ProductCartPage";
import UserProductOrderPage from "./pages/User/ProductOrderPage";
import ProfilePage from "./pages/User/ProfilePage";
import AdminUserPage from "./pages/Admin/UserPage";
//auth-pages
import RegisterPage from "./pages/User/Register";
import LoginPage from "./pages/User/Login";
import PrivateLayout from "./layouts/PrivateLayout";

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
        <DefaultLayout exact path={PATH.PROFILE} component={ProfilePage} />
        <PrivateLayout exact path={PATH.USERADMIN} component={AdminUserPage} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
