import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UseAuthListener from "./hooks/UseAuthListener";
import UserContext from "./context/user";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
    const { user } = UseAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login} exact />
                        <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
                        <Route
                            path={ROUTES.DASHBOARD}
                            component={Dashboard}
                            exact
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
