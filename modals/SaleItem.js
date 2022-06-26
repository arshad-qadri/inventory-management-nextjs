import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { saleProduct } from "../redux/actions";

const SaleItem = (props) => {
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
    const {bag_id, bag_name, bag_price } = formData;
    const obj1 = {
      bag_id,
      bag_name,
      bag_price,
      qty:props.sale.qty - parseInt(formData.qty)
    };
    const obj2 = {
      bag_id,
      bag_name,
      bag_price,
      qty:parseInt(formData.qty)
    };
    dispatch(saleProduct(props.sale._id, obj1, obj2,"OUT"))
    props.onHide();
  };
  useEffect(() => {
    if (props.sale) {
      const { bag_id, bag_name, bag_price } = props.sale;
      setFormData({
        ...formData,
        bag_id: bag_id,
        bag_name: bag_name,
        bag_price: bag_price,
      });
      console.log("sale===", props.sale);
    }
  }, [props.sale]);
  useEffect(() => {
    console.log("formData===", formData);
  }, [formData]);
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
            Sale Item
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
                  value={formData.bag_id}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Name</Form.Label>
                <Form.Control
                  name="bag_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Bag name"
                  value={formData.bag_name}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Price</Form.Label>
                <Form.Control
                  name="bag_price"
                  onChange={handleChange}
                  type="number"
                  placeholder="Bag price"
                  value={formData.bag_price}
                  disabled
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

export default SaleItem;
