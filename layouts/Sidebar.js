import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Sidebar = ({ setCreateItemModal, setAddItemModal }) => {
  const [product, setProduct] = useState([]);
  const [total_value, setTotal_value] = useState(0);
  const [stock, setStock] = useState(0);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    setProduct(products);
  }, [products]);

  useEffect(() => {
    const totVal =
      product.length > 0 &&
      product.map((item) => item.qty * parseInt(item.bag_price));
    const newTotVal = totVal.length > 0 && totVal?.reduce((a, b) => a + b);
    setTotal_value(newTotVal);

    const stockVal =
      product.length > 0 && product.map((item) => parseInt(item.qty));
    const newStockVal =
      stockVal.length > 0 && stockVal?.reduce((a, b) => a + b);

    setStock(newStockVal);
  }, [product]);
  return (
    <>
      <div className="vh-100 bg-primary sidebar border-right">
        <h1 className="text-center border-bottom">
          <Link href={"/"}>
            <a className="text-white">Dashboard</a>
          </Link>
        </h1>

        <ul className="w-100 text-center"><li>
            <Button
              variant="light"
              size="sm"
              onClick={() => setCreateItemModal(true)}
            >
              Create Item
            </Button>
          </li>
          <li>
            <Button variant="light" size="sm" onClick={()=>setAddItemModal(true)}>
              add Item
            </Button>
          </li>
          {/* <li>
            <a href="#">
              <Button variant="light" size="sm">
                Stock
              </Button>
            </a>
          </li> */}
          <li>
            <Link href="/history">
              <a>
                <Button variant="light" size="sm">
                  History
                </Button>
              </a>
            </Link>
          </li></ul>

        <div className="stock-value mt-5">
          <div className="stocks">
            <h3 className="text-white">Stocks</h3>
            <h4>{stock}</h4>
          </div>
          <div className="value mt-5">
            <h3 className="text-white">Value</h3>
            <h4>
              {total_value && total_value}
              {/* {product.map((item)=>(item.))}  */}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
