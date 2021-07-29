import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppDefault from "views/layouts/AppDefault";
import Home from "views/pages/Home";
import Cart from "views/pages/Cart";
import OrderConfirm from "views/pages/OrderConfirm";

const routes = [
  {
    path: "/",
    exact: true,
    title: "Warelabs",
    component: Home,
    layout: AppDefault,
  },
  {
    path: "/cart",
    title: "Cart page",
    component: Cart,
    layout: AppDefault,
    hideSidebar: true,
  },
  {
    path: "/order-confirm",
    title: "Order confirmation page",
    component: OrderConfirm,
    layout: AppDefault,
    hideSidebar: true,
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
