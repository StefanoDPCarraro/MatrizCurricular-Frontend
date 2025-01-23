import React from "react";
import Card from "@components/Card";
import { requirements } from "@mocks/Requirements";
import Header from "@features/Header/Header";

const Matriz: React.FC = () => {
  return (
    <>
      <Header></Header>
      <br></br>
      <Card
        required={requirements}
        requirement={requirements}
        onClick={() => {
          console.log("clicked");
        }}
        creditCode={"1229381-02"}
      >
        Fundamentos de sistemas digitais
      </Card>
      <br></br>
      <Card
        required={requirements}
        requirement={requirements}
        onClick={() => {
          console.log("clicked");
        }}
        creditCode={"98712-04"}
      >
        Teste
      </Card>
    </>
  );
};

export default Matriz;
