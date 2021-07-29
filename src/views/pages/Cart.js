import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { clean } from "../../stores/reducers/cart";
import { addInform } from "../../stores/reducers/buyer";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CartList from "../components/CartList";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Cart = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let sumValues = 0;
    if (cart && cart.length > 0) {
      for (let item of cart) {
        sumValues += item.quantity * item.price;
      }
    }
    setTotal(sumValues);
  }, [cart]);

  useEffect(() => {
    if (name !== "" && email !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email]);

  let history = useHistory();
  const handleSubmit = () => {
    if (name && email) {
      dispatch(clean());
      dispatch(addInform({ name, email }));
      history.push("/order-confirm");
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    let pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (event.target.value !== "" || pattern.test(event.target.value)) {
      setEmail(event.target.value);
    }
  };

  return (
    <main className={classes.root}>
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.itemRoot}
              gutterBottom
              variant="h5"
              align="center"
              component="h2"
            >
              ITEMS IN CART
            </Typography>
            {cart &&
              cart.map((item, index) => <CartList item={item} key={index} />)}

            <Card className={classes.totalRoot}>
              <CardActions className={classes.totalContainer}>
                <Typography
                  className={classes.totalTitle}
                  variant="h5"
                  component="h5"
                >
                  Total
                </Typography>

                <Typography
                  className={classes.totalValue}
                  variant="h5"
                  component="h5"
                >
                  {total}
                </Typography>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.contactRoot}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="name"
                className={classes.contactField}
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={handleChangeName}
                required
              />
              <TextField
                id="email"
                className={classes.contactField}
                label="Email"
                variant="outlined"
                placeholder="Email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
                required
              />

              <Button
                className={classes.contactButton}
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleSubmit}
                disabled={disabled}
              >
                PLACE ORDER
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
  paper: {
    padding: "20px",
  },
  itemRoot: {
    padding: "20px",
  },

  totalRoot: {
    marginTop: "10rem",
    boxShadow: "none",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  totalTitle: {
    flex: "0.2",
    textAlign: "center",
  },

  totalValue: {
    flex: "0.4",
    textAlign: "center",
  },
  contactRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "500px",
  },
  contactField: {
    marginBottom: "14px",
    width: "100%",
  },
  contactButton: {
    marginTop: "50px",
    backgroundColor: "cadetblue",
    color: "#fff",
    "&:hover, &:focus": {
      backgroundColor: "cadetblue",
    },
    borderRadius: "10px",
    minHeight: "75px",
    width: "100%",
  },
}));

export default Cart;
