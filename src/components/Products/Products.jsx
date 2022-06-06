import React from "react";
import { useEffect,useState } from "react";
import axios from "react"
import Product from "./Product/Product";

const Products = () => {
  const [carddata,setCarddata] = useState([]) 
  useEffect(()=>{
    const GetData = async ()=>{
      let r = await axios.get(`http://localhost:8080/products`)
     setCarddata(r.data)
    }
    GetData()
  },[])
  return <div>
    {carddata.map((item)=>{
      return <Product key={item.id} item={item} />
    })}
  </div>;
};

export default Products;
