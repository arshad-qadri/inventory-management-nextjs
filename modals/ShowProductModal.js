import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'

const ShowProductModal = (props) => {
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{padding:"10px"}}>
          <Modal.Title id="contained-modal-title-vcenter" >
            Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                props.data &&
          <Container>
            <Row>
                <Col > <h6>Bag Id </h6></Col>
                <Col > <h6>: {props.data.bag_id}</h6></Col>
            </Row>
            <Row>
                <Col> <h6>Bag Name </h6></Col>
                <Col> <h6>: {props.data.bag_name}</h6></Col>
            </Row>
            <Row>
                <Col> <h6>Bag Price </h6></Col>
                <Col> <h6 className='text-success'>: {props.data.bag_price}</h6></Col>
            </Row>
            <Row>
                <Col> <h6>Quantity </h6></Col>
                <Col> <h6 className='text-danger'>: {props.data.qty}</h6></Col>
            </Row>
          </Container>
            }
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={handleSubmit}>Save</Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
  )
}

export default ShowProductModal
