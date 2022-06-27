import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { deleteProduct } from "../redux/actions";
import SaleItem from "../modals/SaleItem";
import Pagination from "react-bootstrap/Pagination";
import { useReducer } from "react";

const TableData = () => {
  const [saleItemModal, setSaleItemModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [sale, setSale] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [pervNum, setPervNum] = useState(0);
  const [nextNum, setNextNum] = useState(7);
  const [activePageNum, setActivePageNum] = useState(1);
  const { products } = useSelector((state) => state.productReducer);
  const numRef = useReducer();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(
        (item, ind) => ind >= pervNum && ind < nextNum
      );
      setProduct(filtered);
      let num = products.length / 7;

      setPageNum(Math.ceil(num));
    }
  }, [products, pervNum]);

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure want to delete?");
    if (confirmed) {
      dispatch(deleteProduct(id));
    }
  };
  const handleSale = (data) => {
    setSaleItemModal(true);
    setSale(data);
  };

  useEffect(() => {
    numRef.current = activePageNum;
  }, [activePageNum]);


  const handlePagination = (number) => {
    setActivePageNum(number);
    if (activePageNum < number) {
      setPervNum(pervNum + 7);
      if (products.length - nextNum < 7) {
        setNextNum(products.length);
      } else {
        setNextNum(nextNum + 7);
      }
    } else if (activePageNum > number) {
      setPervNum(pervNum - 7);
      if (products.length - pervNum < 7) {
        setNextNum(pervNum);
      } else {
        setNextNum(nextNum - 7);
      }
    }
  };

  let active = activePageNum;
  let items = [];
  for (let number = 1; number <= pageNum; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="table_overflow">
        <div className="bg-white p-2 table_overflow_width">
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Bag Id</th>
                  <th>Bag Name</th>
                  <th>Bag Price</th>
                  <th>Bag Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product?.length > 0 ? (
                  product.map((item, ind) => (
                    <tr
                      key={ind}
                      className="text-capitalize"
                      onDoubleClick={() => console.log("double click", item)}
                    >
                      <td>{ind + 1}</td>
                      <td>{item.bag_id}</td>
                      <td>{item.bag_name}</td>
                      <td>{item.bag_price}</td>
                      <td>{item.qty}</td>
                      <td>
                        <Button
                          className="me-2"
                          variant="outline-warning"
                          size="md"
                          onClick={() => handleSale(item)}
                        >
                          Sale
                        </Button>
                        <Button
                          className="me-2"
                          variant="outline-primary"
                          size="sm"
                        >
                          <div className="icons-edit-delete">
                            <FiEdit />
                          </div>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(item._id)}
                        >
                          <div className="icons-edit-delete">
                            <RiDeleteBinFill />
                          </div>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>No record found</td>
                  </tr>
                )}
              </tbody>
            </Table>

            <SaleItem
              show={saleItemModal}
              onHide={() => setSaleItemModal(false)}
              sale={sale}
            />
          </div>
        </div>
      </div>
      {product.length > 0 && <div className="w-100 text-center my-2 d-flex justify-content-center"><Pagination ref={numRef}>{items}</Pagination></div> }
    </>
  );
};

export default TableData;
