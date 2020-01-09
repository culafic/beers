import React from "react";
import { IBeer } from "../inteface";
import "./CartPage.css";
import Button from "../components/Button";

interface CartItemsProps extends IBeer {
  count?: number;
}

interface CartPageProps {
  cart: IBeer[];
  leng: number;
  tot: number;
  handleAdd: (item: IBeer) => void;
}

const summarizer = (result: CartItemsProps[], item: CartItemsProps) => {
  const existingItem: any = result.find(i => i.id === item.id);
  if (!existingItem) {
    result.push({
      ...item,
      count: 1
    });
  } else {
    existingItem.count++;
  }

  return result;
};

const CartPage: React.FC<CartPageProps> = ({ cart, leng, tot }) => {
  const cartItems: CartItemsProps[] = cart.reduce<CartItemsProps[]>(
    summarizer,
    []
  );

  const average = tot / leng;

  cart.map(item => {
    return (item.abv = item.abv > average ? item.abv : item.abv * 0.8);
  });

  cart.map(item => {
    return (item.abv =
      item.abv > average ? item.abv : Math.round(item.abv * 0.8 * 100) / 100);
  });

  const total = () => {
    return cartItems.reduce((total, item) => {
      return (
        Math.round((total + item.abv * (item.count ? item.count : 0)) * 100) /
        100
      );
    }, 0);
  };

  return (
    <table className="content">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.id}>
            <td className="cart-image">
              <img src={item.image_url} alt={item.name} />
            </td>
            <td className="cart-name">{item.name}</td>
            <td className="cart-count">{item.count}</td>
            <td className="item-price">{item.abv} EUR</td>
          </tr>
        ))}
        <tr className="total">
          <td colSpan={4}>
            Total: {total() + " "}
            RSD{" "}
            <Button size="small" danger="danger" to="/checkout">
              Checkout Now
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartPage;
