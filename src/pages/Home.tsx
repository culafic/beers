import React from "react";
import "./Home.css";
import Button from "../components/Button";

export default function Home(): JSX.Element {
  return (
    <div className="welcomePage">
      <h1>Welcome beer lovers!</h1>
      <Button to="/beers">Check out our Beer Store!</Button>
    </div>
  );
}
