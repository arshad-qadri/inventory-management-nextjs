import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { deleteProduct } from "../redux/actions";
import SaleItem from "../modals/SaleItem";
import ShowProductModal from "../modals/ShowProductModal";
import EditItemModal from "../modals/EditItemModal";
import Pagination from "./Pagination";

const TableData = () => {
  const [saleItemModal, setSaleItemModal] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [showProductObj, setShowProductObj] = useState({});
  const [product, setProduct] = useState([]);
  const [sale, setSale] = useState(null);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (products.length > 0) {
  //     setProduct(products);
  //   }
  // }, [products]);

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

  const handleShowDetails = (item) => {
    setShowProduct(true);
    setShowProductObj(item);
  };

  const handleEdit = (item) => {
    setEditModal(true);
    setShowProductObj(item);
  };

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
                      onDoubleClick={() => handleShowDetails(item)}
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
                          <div
                            className="icons-edit-delete"
                            onClick={() => handleEdit(item)}
                          >
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
            <ShowProductModal
              show={showProduct}
              onHide={() => setShowProduct(false)}
              data={showProductObj}
            />
            <EditItemModal
              show={editModal}
              onHide={() => setEditModal(false)}
              data={showProductObj}
            />
          </div>
        </div>
      </div>
      <Pagination
        items={products}
        setItems={setProduct}
        length={products.length}
        // pageNum={pageNum}
        // setPageNum={setPageNum}
        // nextNum={nextNum}
        // setNextNum={setNextNum}
        // pervNum={pervNum}
        // setPervNum={setPervNum}
      />
    </>
  );
};

export default TableData;
