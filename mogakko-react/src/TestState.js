import React, { useState } from "react";
import Button from "./components/Button";
import Layout from "./Layout";
import Number from "./components/Number";

function TestState() {
  const [number, setNumber] = useState(0);

  function plusOne() {
    setNumber(number + 1);
  }

  function minusOne() {
    setNumber(number - 1);
  }

  function multipleTwo() {
    setNumber(number * 2);
  }

  console.log(number);
  return (
    <Layout>
      <Number number={number} />
      <Button onClick={plusOne} text="+1" />
      <Button onClick={minusOne} text="-1" />
      <Button onClick={multipleTwo} text="*2" />
    </Layout>
  );
}
export default TestState;
