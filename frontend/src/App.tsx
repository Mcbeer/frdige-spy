import React, { FunctionComponent } from "react";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/layout/Layout";
import { Fridge } from "./components/pages/Fridge/Fridge";
import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/Login/Login";
import { Settings } from "./components/pages/Settings/Settings";
import { store } from "./store/Store";
import { StoreModel } from "./store/StoreModel";

export const App = () => {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/" exact component={Home} />
              <Route path="/fridge" exact component={Fridge} />
              {/* <AuthenticatedRoute path="/" exact component={Home} /> */}
              <AuthenticatedRoute path="/settings" exact component={Settings} />
              {/* <AuthenticatedRoute path="/fridge" component={Fridge} /> */}
              {/* <AuthenticatedRoute
                path="/fridge/add"
                exact
                component={AddProduct}
              /> */}
            </Switch>
          </Layout>
        </Provider>
      </div>
    </Router>
  );
};

type AuthenticatedRouteProps = {
  path: string;
  exact?: boolean;
  component: FunctionComponent<any>;
};

const AuthenticatedRoute = ({
  path,
  exact = true,
  component,
}: AuthenticatedRouteProps) => {
  // Check logged in state
  const signedIn = useSelector((state: StoreModel) => state.user.authenticated);
  const location = useLocation();

  if (signedIn) {
    return <Route path={path} exact={exact} component={component} />;
  } else {
    return (
      <Redirect
        to={{ pathname: "/login", state: { referrer: location.pathname } }}
      />
    );
  }
};
