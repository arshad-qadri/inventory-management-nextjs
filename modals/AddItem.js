import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, findProduct } from "../redux/actions";

const AddItem = (props) => {
  const { products } = useSelector((state) => state.productReducer);
  const { oneProduct } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bag_id: "",
    bag_name: "",
    bag_price: "",
    qty: "",
  });
  useEffect(() => {
    setProduct(oneProduct.data);
  }, [oneProduct]);
  useEffect(() => {
    if (product) {
      setFormData({
        ...formData,
        bag_name: product.bag_name,
        bag_price: product.bag_price,
      });
    }
  }, [product]);

  useEffect(() => {
    if (formData.bag_id === "") {
      setFormData({
        ...formData,
        bag_id: "",
        bag_name: "",
        bag_price: "",
      });
    } else if (formData.bag_id) {
      dispatch(findProduct(formData.bag_id));
    }
  }, [formData.bag_id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const obj1 = {
      bag_id: product?.bag_id,
      bag_name: formData.bag_name,
      bag_price: formData.bag_price,
      qty: product?.qty + parseInt(formData.qty),
    };
    const obj2 = {
      bag_id: product?.bag_id,
      bag_name: formData.bag_name,
      bag_price: formData.bag_price,
      qty: parseInt(formData.qty),
    };
    const { bag_id, bag_name, bag_price, qty } = formData;
    if ((bag_id, bag_name, bag_price, qty)) {
      dispatch(addProduct(product?._id, obj1, obj2, "IN", "Product added !"));
      setFormData({
        ...formData,
        bag_id: "",
        bag_name: "",
        bag_price: "",
        qty: "",
      });
      props.onHide();
    } 
    else if (formData.bag_id==="") {
      alert("Please select any bag id !!");
    }
    else if (formData.qty==="") {
      alert("Please enter quantity !!");
    }
     else {
      alert("All fields are required !!");
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Bag Id</Form.Label>
                <Form.Select
                  name="bag_id"
                  value={formData.bag_id}
                  onChange={handleChange}
                >
                  <option value={""}>Select bag id</option>
                  {products?.length > 0 &&
                    products.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.bag_id}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Name</Form.Label>
                <Form.Control
                  name="bag_name"
                  onChange={handleChange}
                  value={formData.bag_name}
                  disabled
                  type="text"
                  placeholder="Bag name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Price</Form.Label>
                <Form.Control
                  name="bag_price"
                  onChange={handleChange}
                  value={formData.bag_price}
                  disabled
                  type="number"
                  placeholder="Bag price"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  name="qty"
                  onChange={handleChange}
                  type="number"
                  placeholder="Quantity"
                  value={formData.qty}
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddItem;
