import { Route, Redirect } from "react-router-dom";
import PATH from "../../constants/path";
import SidebarAdmin from "../../components/User/SidebarAdmin";
import "./styles.scss";

function PrivateLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo && userInfo.id) {
    if (userInfo.role !== "admin") {
      return <Redirect to={PATH.HOME} />;
    }
  } else {
    return <Redirect to={PATH.LOGIN} />;
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <main className="private-layout">
            <SidebarAdmin {...routeProps} />
            <div className="private-layout__childs">
              <Component {...other} {...routeProps} />
            </div>
          </main>
        );
      }}
    />
  );
}

export default PrivateLayout;
