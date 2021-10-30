import { Router, Switch } from "react-router-dom";
import history from "./utils/history";
import PATH from "./constants/path";
//layouts
import DefaultLayout from "./layouts/DefaultLayout";
import PrivateLayout from "./layouts/PrivateLayout";
//pages
import UserHomePage from "./pages/User/HomePage";
import UserProductListPage from "./pages/User/ProductListPage";
import UserProductDetailPage from "./pages/User/ProductDetailPage";
import UserProductCartPage from "./pages/User/ProductCartPage";
import UserProductOrderPage from "./pages/User/ProductOrderPage";
import UserOrderThanksPage from "./pages/User/ThanksPage";
import ProfilePage from "./pages/User/ProfilePage";
import NotFoundPage from "./pages/User/NotFoundPage";
import AdminUserPage from "./pages/Admin/UserPage";
import AdminProductPage from "./pages/Admin/ProductPage";
import AdminOrderPage from "./pages/Admin/OrderPage";
import AdminDashboardPage from "./pages/Admin/DashboardPage";
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
        <DefaultLayout exact path={PATH.PROFILE} component={ProfilePage} />
        <DefaultLayout exact path={PATH.THANKS} component={UserOrderThanksPage} />
        <DefaultLayout exact path={PATH.NOTFOUND} component={NotFoundPage} />
        <PrivateLayout exact path={PATH.USERADMIN} component={AdminUserPage} />
        <PrivateLayout
          exact
          path={PATH.PRODUCTADMIN}
          component={AdminProductPage}
        />
        <PrivateLayout
          exact
          path={PATH.ORDERADMIN}
          component={AdminOrderPage}
        />
        <PrivateLayout exact path={PATH.ADMIN} component={AdminDashboardPage} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
