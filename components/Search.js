import React from "react";
import { Form } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Form.Control
        type="text"
        className="search-input px-4 mb-3"
        placeholder="Search by bag Id, name and price"
      />
    </>
  );
};

export default Search;
