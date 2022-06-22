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
      <Container>history</Container>
    </>
  );
};

export default History;
