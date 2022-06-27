import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Search from "../components/Search";
import TableData from "../components/TableData";


export default function Home() {
  return (
    <>
      {/* <Container className=""> */}
        <Search />
        <TableData />
      {/* </Container> */}

    </>
  );
}
