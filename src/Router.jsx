import { Router, Switch} from 'react-router-dom';
import history from './utils/history';
import DefaultLayout from './layouts/DefaultLayout';
import UserHomePage from './pages/User/HomePage';

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path="/" component = {UserHomePage} />
      </Switch>
    </Router>
  )
}

export default BrowserRouter;
