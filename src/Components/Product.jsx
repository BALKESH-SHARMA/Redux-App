import React from "react";
import { addItem,deleteItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import './Product.css'

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 class="card-title">{props.productName}</h5>
        <p class="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price,id:props.id }))
          }
          className="btn btn-primary"
        >
          Add to cart
        </button>
        <button onClick={(e)=>dispatch(deleteItem({ id:props.id }))} className="btn btn-primary del"> Delete</button>
      </div>
    </div>
  );
};

export default Product;
