import "./App.css";

import Main from "zones/main/main";
import User from "zones/user/user";
import Auth from "zones/auth/auth";
import Admin from "zones/admin/admin";
import { useHistory, BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "components/routes/ProtectedRoute";
function App() {
  const Unauthorized = () => (
    <div>
      <p>خطای امنیتی</p>
      <a href="/">صفحه اصلی</a>
    </div>
  );
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <div className="container" dir="rtl">
        <Switch>
          <ProtectedRoute path={"/dashboard"} component={User} />
          <Route path={"/auth"} component={Auth} />
          <Route path={"/admin"} component={Admin} />
          <Route path={"/unauthorized"} component={Unauthorized} />
          <Route path={"/"} component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
