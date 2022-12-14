import React from "react";
import About from "../about";
import Experience from "../experience";
import Reference from "../my_work";
import { BodyContainer } from "./body_styles";

type Props = {};

function Body({}: Props) {
  return (
    <BodyContainer>
      <About />
      <Experience />
      <Reference />
    </BodyContainer>
  );
}

export default Body;
