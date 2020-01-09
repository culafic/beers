import React, { useReducer } from "react";
import { IBeer } from "../inteface";
import "./CheckoutPage.css";
import States from "../components/States";

interface CartPageProps {
  cart: IBeer[];
}

interface IAction {
  type: string;
  payload: Array<IState> | any;
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.payload
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload
      };
    case "email":
      return {
        ...state,
        email: action.payload
      };
    case "street":
      return {
        ...state,
        street: action.payload
      };
    case "city":
      return {
        ...state,
        city: action.payload
      };
    case "state":
      return {
        ...state,
        state: action.payload
      };
    case "isResidential":
      return {
        ...state,
        isResidential: action.payload
      };
    default:
      return state;
  }
}

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  isResidential: boolean;
}

const initalState: IState = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  isResidential: false
};

const CheckoutPage: React.FC<CartPageProps> = ({ cart }) => {
  const [formState, dispatch] = useReducer(reducer, initalState);

  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    isResidential
  } = formState;

  const done =
    firstName && lastName && email && street && city && state & isResidential;

  return (
    <div className="place-form">
      <p>You are buying {cart.length} items</p>
      <form className="field-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={e => {
              dispatch({ type: "firstName", payload: e.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={e => {
              dispatch({ type: "lastName", payload: e.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={e => {
              dispatch({ type: "email", payload: e.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="street">Street</label>
          <input
            className="form-control"
            type="text"
            id="street"
            name="street"
            value={formState.street}
            onChange={e => {
              dispatch({ type: "street", payload: e.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            type="text"
            id="city"
            name="city"
            value={formState.city}
            onChange={e => {
              dispatch({ type: "city", payload: e.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="state">State</label>
          <select
            className="form-control"
            id="state"
            name="state"
            value={formState.state}
            onChange={e => {
              dispatch({ type: "state", payload: e.target.value });
            }}
          >
            <States />
          </select>
        </div>
        <div className="form-control isRes">
          <label htmlFor="isResidential" style={{ display: "inline-block" }}>
            Is this residential address?{" "}
          </label>
          <input
            style={{
              display: "inline-block",
              width: "12px",
              margin: "0px 5px"
            }}
            type="checkbox"
            id="isResidential"
            name="isResidential"
            checked={formState.isResidential}
            onChange={e => {
              dispatch({ type: "isResidential", payload: e.target.checked });
            }}
          />
        </div>
      </form>

      <section>
        <h3>Confirm Shipping Info</h3>
      </section>
    </div>
  );
};

export default CheckoutPage;
