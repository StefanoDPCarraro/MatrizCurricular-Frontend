import React from "react";
import Card from "@components/Card";
import { requirements } from "@mocks/Requirements";
import Header from "@features/Header/Header";

const Matriz: React.FC = () => {
  return (
    <>
      <Header course="Engenharia de Software - 98AL"></Header>
      <br></br>
      <br></br>
      <Card
        required={requirements}
        requirement={requirements}
        onClick={() => {
          console.log("clicked");
        }}
        creditCode={"1229381-02"}
      >
        Sistemas de Planejamento e Custo para Engenharia
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
