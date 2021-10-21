import { Router, Switch } from "react-router-dom";
import history from "./utils/history";
import PATH from "./constants/path";
//layouts
import DefaultLayout from "./layouts/DefaultLayout";
//pages
import UserHomePage from "./pages/User/HomePage";
import UserProductListPage from "./pages/User/ProductListPage";

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
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
