import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {getProduct, searchProduct } from "../redux/actions";

const Search = () => {
  const [inpSearch,setInpSearch]=useState("")
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    setInpSearch(e.target.value.trim())
     if(e.target.value===""){
      dispatch(getProduct())
    }
  }
  useEffect(()=>{
    if(inpSearch.trim()){
     
        dispatch(searchProduct(inpSearch.toLowerCase().trim()))
    
    }
    
  },[inpSearch])
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
