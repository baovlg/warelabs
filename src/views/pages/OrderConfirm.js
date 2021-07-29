import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const OrderConfirm = () => {
  const classes = useStyles();
  const buyer = useSelector((state) => state.buyer);

  return (
    <div className={classes.root}>
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Thank you for Confirming the Order {buyer[0]?.name}</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "none",
    minHeight: "500px",
  },
}));

export default OrderConfirm;
