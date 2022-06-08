import React from "react";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <div className="vh-100 bg-primary sidebar border-right">
        <h1 className="text-center border-bottom">Dashboard</h1>

        <ul className="w-100 text-center">
          <li>
            <a href="#">
              <Button variant="light" size="sm">
                Create Item
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button variant="light" size="sm">
                Add Item
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button variant="light" size="sm">
                Stock
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button variant="light" size="sm">
                History
              </Button>
            </a>
          </li>
        </ul>

        <div className="stock-value mt-5">
          <div className="stocks">
            <h3 className="text-white">Stocks</h3>
            <h4>5000</h4>
          </div>
          <div className="value mt-5">
            <h3 className="text-white">Value</h3>
            <h4>20000055550</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
