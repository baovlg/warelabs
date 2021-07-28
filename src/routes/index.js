import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppDefault from "views/layouts/AppDefault";
import Home from "views/pages/Home";

const routes = [
  {
    path: "/",
    exact: true,
    title: "Warelabs",
    component: Home,
    layout: AppDefault,
  },
];

function RouteConfig() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.layout
          component={route.component}
          title={route.title}
          routes={route.routes}
          hideSidebar={route.hideSidebar}
          {...props}
        />
      )}
    />
  );
}

export default RouteConfig;
