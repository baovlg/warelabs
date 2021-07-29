import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { increment } from "../../stores/reducers/cart";
import { useDispatch } from "react-redux";

const ContainerItem = (props) => {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const onMouseOver = () => setDisplay(true);
  const onMouseOut = () => setDisplay(false);
  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    dispatch(increment(item));
  };

  return (
    <div
      className={classes.root}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Card
        className={[classes.cardContainer, display ? classes.hover : ""].join(
          " "
        )}
      >
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title={props.product.name}
        />
        <CardContent>
          <Typography
            className={classes.textAlignLeft}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.product.name}
          </Typography>
          <Typography
            className={classes.textAlignLeft}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.product.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Typography
            className={classes.price}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {props.product.price} $
          </Typography>
        </CardActions>
      </Card>
      <AddIcon
        className={[classes.plusIcon, display ? classes.show : ""].join(" ")}
        color="primary"
        onClick={() => handleIncrement(props.product)}
      ></AddIcon>
      <Button
        className={[classes.addToCartButton, display ? classes.show : ""].join(
          " "
        )}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handleIncrement(props.product)}
      >
        Add to cart
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  cardContainer: {
    minWidth: window.innerWidth / 6,
    maxWidth: window.innerWidth / 6,
  },
  textAlignLeft: {
    textAlign: "left",
  },
  price: {
    textAlign: "left",
    paddingLeft: "8px",
  },
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  addToCartButton: {
    backgroundColor: "cadetblue",
    color: "#fff",
    position: "absolute",
    bottom: "8px",
    zIndex: 2,
    display: "none",
    "&:hover, &:focus": {
      backgroundColor: "cadetblue",
    },
  },

  plusIcon: {
    position: "absolute",
    top: "15%",
    left: "35%",
    zIndex: 2,
    display: "none",
    fontSize: "10rem",
    backgroundColor: "transparent",
    borderColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },

  show: {
    display: "inline-flex",
  },
  hover: {
    opacity: "0.7",
  },
}));

export default ContainerItem;
