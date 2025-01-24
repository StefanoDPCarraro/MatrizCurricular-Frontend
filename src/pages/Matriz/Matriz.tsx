import React from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import Semester from "@features/Semester/Semester";
import { requirements } from "@mocks/Requirements";

const Matriz: React.FC = () => {
  return (
    <>
      <Header course="Engenharia de Software - 98AL"></Header>
      <div className="matriz-container">
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
        <Semester subjects={requirements}></Semester>
      </div>
    </>
  );
};

export default Matriz;
