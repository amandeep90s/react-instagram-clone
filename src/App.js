import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UseAuthListener from "./hooks/UseAuthListener";
import UserContext from "./context/user";

import ProtectedRoute from "./helpers/ProtectedRoute";
import IsUserLoggedIn from "./helpers/IsUserLoggedIn";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
    const { user } = UseAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <IsUserLoggedIn
                            user={user}
                            loggedInPath={ROUTES.DASHBOARD}
                            path={ROUTES.LOGIN}
                        >
                            <Login />
                        </IsUserLoggedIn>

                        <IsUserLoggedIn
                            user={user}
                            loggedInPath={ROUTES.DASHBOARD}
                            path={ROUTES.SIGN_UP}
                        >
                            <SignUp />
                        </IsUserLoggedIn>

                        <Route path={ROUTES.PROFILE} component={Profile} />

                        <ProtectedRoute
                            user={user}
                            path={ROUTES.DASHBOARD}
                            exact
                        >
                            <Dashboard />
                        </ProtectedRoute>
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
