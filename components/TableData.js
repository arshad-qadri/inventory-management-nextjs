import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { deleteProduct } from "../redux/actions";
import SaleItem from "../modals/SaleItem";


const TableData = () => {
  const [saleItemModal, setSaleItemModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [sale, setSale] = useState(null);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setProduct(products);
  }, [products]);

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure want to delete?");
    if (confirmed) {
      dispatch(deleteProduct(id));
    }
  };
  const handleSale = (data) => {
    setSaleItemModal(true)
    setSale(data)
  };

  return (
    <div className="bg-white p-2 history_overflow">
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
                  <Button className="me-2" variant="outline-primary" size="sm">
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
              <td>No record found</td>
            </tr>
          )}
        </tbody>
      </Table>

      <SaleItem show={saleItemModal}
        onHide={() => setSaleItemModal(false)} sale={sale} />
    </div>
  );
};

export default TableData;
