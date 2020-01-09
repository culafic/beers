import React from "react";
import Button from "../components/Button";
import "./BeerItem.css";
import { IBeer } from "../inteface";

interface BeerItemProps {
  beerItem: IBeer;
  key: number;
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  handleAdd: (item: IBeer) => void;
}

const BeerItem: React.FC<BeerItemProps> = ({
  beerItem,
  image,
  name,
  description,
  price,
  id,
  handleAdd
}) => {
  return (
    <div className="beer-item">
      <img alt={name} src={image} />
      <div className="beer-item-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <Button size="small" danger="danger" to={`/beers/${id}`}>
          Details
        </Button>
        <Button
          size="small"
          danger="danger"
          onClick={() => handleAdd(beerItem)}
        >
          Add to Cart
        </Button>

        <div style={{ marginTop: "20px" }}>Price: {price} EUR</div>
      </div>
    </div>
  );
};

export default BeerItem;
