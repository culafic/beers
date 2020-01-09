import React, { useState } from "react";
import { IBeer } from "./inteface";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import BeerDet from "./pages/BeerDet";
import CartPage from "./pages/CartPage";
import DefaultLayout from "./DefaultLayout";
import CheckoutPage from "./pages/CheckoutPage";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const App = (): JSX.Element => {
  const [cart, setCart] = useState<IBeer[]>([]);
  const [leng, setLeng] = useState<number>(0);
  const [tot, setTot] = useState<number>(0);

  const handleAdd = (item: IBeer): void => {
    console.log(item);
    setCart([...cart, item]);
  };

  const getLength = (leng: number) => {
    setLeng(leng);
  };

  const getTotal = (tot: number) => {
    setTot(tot);
  };

  return (
    <React.Fragment>
      <Router>
        <DefaultLayout cartCount={cart.length}></DefaultLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route
            path="/beers"
            exact
            render={() => (
              <Beers
                handleAdd={handleAdd}
                getLength={getLength}
                getTotal={getTotal}
              />
            )}
          />
          <Route path="/beers/:id">
            <BeerDet />
          </Route>
          <Route
            path="/cart"
            exact
            render={() => (
              <CartPage
                handleAdd={handleAdd}
                cart={cart}
                leng={leng}
                tot={tot}
              />
            )}
          />
          <Route path="/checkout">
            <CheckoutPage cart={cart} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
