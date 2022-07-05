import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {getProduct, searchProduct } from "../redux/actions";
import { useSelector } from "react-redux";

const Search = () => {
  const { products } = useSelector((state) => state.productReducer);
  const [inpSearch,setInpSearch]=useState("")
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    setInpSearch(e.target.value.trim())
     if(e.target.value===""){
      dispatch(getProduct())
      dispatch(searchProduct(""))
    }
  }
  useEffect(()=>{
    if(inpSearch.trim()){     
        dispatch(searchProduct(inpSearch.toLowerCase().trim()))    
    }

    
  },[inpSearch])
  // useEffect(()=>{
  //   dispatch(searchProduct())

  // },[products.length])
  return (
    <>
      <Form.Control
        type="text"
        className="search-input px-4 mb-3"
        placeholder="Search by bag Id, name and price"
        value={inpSearch}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
