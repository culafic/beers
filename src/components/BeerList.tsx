import React from "react";
import { IBeer } from "../inteface";
import BeerItem from "./BeerItem";
import "./BeerList.css";

interface BeerListProps {
  beeritems: IBeer[];
  handleAdd: (item: IBeer) => void;
}

const BeerList: React.FC<BeerListProps> = ({ beeritems, handleAdd }) => {
  return (
    <div className="beer-list">
      {beeritems.map(beeritem => (
        <BeerItem
          beerItem={beeritem}
          key={beeritem.id}
          id={beeritem.id}
          image={beeritem.image_url}
          name={beeritem.name}
          description={beeritem.tagline}
          price={beeritem.abv}
          handleAdd={handleAdd}
        ></BeerItem>
      ))}
    </div>
  );
};

export default BeerList;
