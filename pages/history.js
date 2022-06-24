import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getHistory } from "../redux/actions";

const History = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory())
  }, []);
  return (
    <>
      <Container>
        <div  className="bg-primary w-100 text-center text-white py-2 mb-2">
          <h3 className="m-0">History</h3>
        </div>
        <div className="bg-white shadow-sm">
          dfdfdsf
        </div>
      </Container>
    </>
  );
};

export default History;
