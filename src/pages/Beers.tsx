import React, { useState, useEffect } from "react";
import BeerList from "../components/BeerList";
import SearchBox from "../components/SearchBox";
import { IBeer } from "../inteface";

const URL = `https://api.punkapi.com/v2/beers?brewed_before=12-2008`;

interface BeersProp {
  handleAdd: (item: IBeer) => void;
  getLength: (leng: number) => void;
  getTotal: (tot: number) => void;
}

const Beers: React.FC<BeersProp> = ({ handleAdd, getLength, getTotal }) => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [searchInput, setSearch] = useState("");

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(res => setBeers(res));
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
    console.log(e.type);
  };

  let filteredBeers: IBeer[] = beers.filter((beer: IBeer) => {
    return beer.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  let total: number = 0;

  beers.map(i => {
    total = total + i.abv;
    return getTotal(total);
  });

  getLength(beers.length);

  return (
    <main>
      <SearchBox type="text" value={searchInput} handleInput={handleInput} />
      <BeerList beeritems={filteredBeers} handleAdd={handleAdd} />
    </main>
  );
};

export default Beers;
