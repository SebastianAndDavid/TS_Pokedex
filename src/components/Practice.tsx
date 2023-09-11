import React from "react";

import { firstInterface } from "../interfaces";

export default function Practice(props: {
  myVar: firstInterface;
  myNewVar: firstInterface;
}) {
  console.log("myVar", props.myNewVar.greeting);
  return <div></div>;
}
