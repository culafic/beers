import React, { useState, useEffect } from "react";
import "./BeerDet.css";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

interface Param {
  id?: string;
}

const BeerDet: React.FC = () => {
  const [item, setItem] = useState<any>([{}]);

  const params: Param = useParams();

  const URL = `https://api.punkapi.com/v2/beers/${params.id}`;

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(e => {
        console.error("Nije dobro", e);
        setItem({ error: "Not good" });
      });
  }, [params.id]);

  console.log("PARAMS", item[0].name);

  return (
    <div className="beer-details">
      <div className="item-container">
        <div className="item">
          <img alt={item[0].name} src={item[0].image_url} />
          <div className="info">
            <h2>{item[0].name}</h2>
            <p>{item[0].description}</p>
            <Button to={`/beers`}>Back to the list</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDet;
