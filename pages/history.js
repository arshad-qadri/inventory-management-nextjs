import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../redux/actions";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getHistory());
  }, []);
  useEffect(() => {
    setHistoryList(history?.reverse());
  }, [history]);
  return (
    <>
      <Container>
          <div className="bg-primary w-100 text-center text-white py-2 mb-2">
            <h3 className="m-0">History</h3>
          </div>
        <div className="history_overflow">
          {historyList.length > 0 ? (
            historyList.map((item) => (
              <div
                className={`shadow-sm history_list p-3  ${
                  item.history_type === "IN" ? "in_history" : "out_history"
                }`}
                key={item._id}
              >
                <Row>
                  <Col lg={3} md={3} sm={6}>
                    <div>
                      <span className="titles">Bag Id :</span>
                      <span className="title_value"> {item.bag_id}</span>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={6}>
                    <div>
                      <span className="titles">Bag Name :</span>
                      <span className="title_value"> {item.bag_name} </span>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={6}>
                    <div>
                      <span className="titles">Price :</span>
                      <span className="title_value"> {item.bag_price}</span>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={6}>
                    <div>
                      <span className="titles">Quantity :</span>
                      <span className="title_value"> {item.qty}</span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="date_time">
                      <div>
                        <span>{new Date(item.date).getDate()}</span>/
                        <span>{new Date(item.date).getMonth()}</span>/
                        <span>{new Date(item.date).getFullYear()}</span>
                      </div>

                      <div>
                        <span style={{letterSpacing:"1px"}}>{new Date(item.date).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <p>Not have any history</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default History;
