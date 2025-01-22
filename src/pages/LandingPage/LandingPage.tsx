import Card from "@components/Card";
import { requirements } from "@mocks/Requirements";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <h1>Cursinho dos computer</h1>
      <br></br>
      <Card
        required={requirements}
        requirement={requirements}
        onClick={() => {
          console.log("clicked");
        }}
      >
        Fundamentos de sistemas digitais
      </Card>
    </>
  );
};
export default LandingPage;
