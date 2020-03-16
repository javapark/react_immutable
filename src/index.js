import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Map, List } from "immutable";

// 1. 객체는 Map
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});

console.log(obj.toJS());

// 2. 배열은 List
const arr = List([Map({ foo: 1 }), Map({ foo: 2 })]);

console.log(arr.toJS());

render(<App />, document.getElementById("root"));
