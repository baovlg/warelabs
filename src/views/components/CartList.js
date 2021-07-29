import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import {
  increment,
  decrement,
  incrementByAmount,
  remove,
} from "../../stores/reducers/cart";
import { useDispatch } from "react-redux";

const CartList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(increment(item));
  };
  const handleDecrement = (item) => {
    if (props.item.quantity > 1) {
      dispatch(decrement(item));
    } else {
      if (window.confirm("Delete the item?")) {
        dispatch(remove(item));
      }
    }
  };

  const handleChange = (event, item) => {
    const pattern = /^[0-9\b]+$/;
    if (event.target.value === "" || pattern.test(event.target.value)) {
      dispatch(incrementByAmount({ item, amount: event.target.value }));
    }
  };
  return (
    <Card className={classes.root}>
      <CardActions className={classes.itemContainer}>
        <Typography className={classes.itemText} variant="h5" component="h5">
          {props.item.name}
        </Typography>
        <CardActions className={classes.itemAction}>
          <AddIcon
            size="large"
            color="primary"
            onClick={() => handleIncrement(props.item)}
          />
          <InputBase
            className={classes.itemQuantity}
            placeholder="1"
            value={props.item.quantity}
            onChange={(event) => handleChange(event, props.item)}
            inputProps={{ style: { textAlign: "center" } }}
          ></InputBase>
          <RemoveIcon
            size="large"
            color="primary"
            onClick={() => handleDecrement(props.item)}
          />
        </CardActions>
        <Typography className={classes.itemText} variant="h5" component="h5">
          {props.item.quantity * props.item.price}
        </Typography>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  itemContainer: {
    display: "flex",
    flex: 1,
  },
  itemQuantity: {
    textAlign: "center",
    width: "50px",
    border: "black solid 1px",
  },
  itemAction: {
    flex: "0.2",
    justifyContent: "center",
  },
  itemText: {
    flex: "0.4",
    textAlign: "center",
  },
}));

export default CartList;
