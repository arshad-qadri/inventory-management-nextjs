import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/actions";

const CreateItem = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bag_id: "",
    bag_name: "",
    bag_price: "",
    qty: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const { bag_id, bag_name, bag_price, qty } = formData;
    if ((bag_id, bag_name, bag_price, qty)) {
      dispatch(createProduct(formData, "IN"));
      props.onHide();
    }  else {
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
          <Modal.Title id="contained-modal-title-vcenter">
            Create Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Bag Id</Form.Label>
                <Form.Control
                  name="bag_id"
                  onChange={handleChange}
                  type="text"
                  placeholder="Bag id"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Name</Form.Label>
                <Form.Control
                  name="bag_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Bag name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Price</Form.Label>
                <Form.Control
                  name="bag_price"
                  onChange={handleChange}
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
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Save</Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateItem;
