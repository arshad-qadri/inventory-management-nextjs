import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";

const EditItemModal = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bag_id: "",
    bag_name: "",
    bag_price: "",
    qty: "",
  });

  useEffect(() => {
    if (props.data) {
      setFormData({
        ...formData,
        bag_id: props.data.bag_id,
        bag_name: props.data.bag_name,
        bag_price: props.data.bag_price,
        qty: props.data.qty,
      });
    }
  }, [props]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const obj1 = {
      bag_id: formData.bag_id,
      bag_name: formData.bag_name,
      bag_price: formData.bag_price,
      qty: formData.qty,
    };
    dispatch(addProduct(props.data._id, obj1, {}, "", "Product edited !"));
    setFormData({
      ...formData,
      bag_id: "",
      bag_name: "",
      bag_price: "",
      qty: "",
    });
    props.onHide();
  };
  //   useEffect(()=>{
  //     if(props.onHide){
  //         setFormData({...formData, bag_id:"",bag_name:"",bag_price:"",qty:""})
  //         console.log("formdata===",formData);
  //     }
  //   },[props])
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
                <Form.Control
                  name="bag_id"
                  onChange={handleChange}
                  value={formData.bag_id}
                  type="text"
                  placeholder="Bag id"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bag Name</Form.Label>
                <Form.Control
                  name="bag_name"
                  onChange={handleChange}
                  value={formData.bag_name}
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
                  disabled
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

export default EditItemModal;
