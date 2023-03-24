import React from "react";

const Example = () => {
  const func1 = () => {
    return "Vikas";
  };
  const text = true;
    if (text) return <h1>{func1()}</h1>;
  else return <h1>No tesxt</h1>;
};

export default Example;
