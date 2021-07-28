import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const AppDefault = ({ hideSidebar, component: Component, ...rest }) => {
  const classes = useStyles();

  return (
    <Route
      render={(props) => (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          {hideSidebar ?? <Sidebar />}
          <Component {...props} {...rest} />
        </div>
      )}
    />
  );
};

export default AppDefault;
