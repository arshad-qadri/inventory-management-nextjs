import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { deleteProduct } from "../redux/actions";

const TableData = () => {
  const [product, setProduct] = useState([]);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch()
  useEffect(() => {
    setProduct(products);
    console.log("products", products);
  }, [products]);

  const handleDelete=(id) =>{
    dispatch(deleteProduct(id))
  }

  return (
    <div className="bg-white">
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
          {product.length > 0 &&
            product.map((item, ind) => (
              <tr key={ind} className="text-capitalize">
                <td>{ind + 1}</td>
                <td>{item.bag_id}</td>
                <td>{item.bag_name}</td>
                <td>{item.bag_price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button className="me-2" variant="outline-primary" size="sm">
                    <div className="icons-edit-delete">
                      <FiEdit />
                    </div>
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={()=> handleDelete(item._id)}>
                    <div className="icons-edit-delete">
                      <RiDeleteBinFill />
                    </div>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
