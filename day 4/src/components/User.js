import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";

export const User = (props) => {
  //const classes = userStyle();
  const [number, newNum] = useState(0);

  const incrementNumber = () => {
    newNum(number + 1);
  };

  const decrementNumber = () => {
    newNum(number - 1);
  };

  return (
    <>
      <h1>this is User components {props.name}</h1>
      <p>Number : {number}</p>
      <p>
        incrementNumber :{" "}
        <Button onClick={incrementNumber} variant="contained" color="secondary">
          +
        </Button>
      </p>
      <p>
      decrementNumber :{" "}
        <Button onClick={decrementNumber} variant="contained" color="primary">
          -
        </Button>
      </p>
    </>
  );
};
