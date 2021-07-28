import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../stores/reduxs/reducers";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContainerItem from "../components/ContainerItem";
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // return (
  //   <div>
  //     <button
  //       aria-label="Increment value"
  //       onClick={() => dispatch(increment())}
  //     >
  //       Increment
  //     </button>
  //     <span>{cart.length}</span>
  //     <button
  //       aria-label="Decrement value"
  //       onClick={() => dispatch(decrement())}
  //     >
  //       Decrement
  //     </button>
  //   </div>
  // );
  return (
    <main className={classes.content}>
      <Toolbar />

      <ContainerItem />
    </main>
  );
};

export default Home;
