import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Search from "../components/Search";
import TableData from "../components/TableData";
import { getProduct } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <Container className="py-3">
        <Search />
        <TableData />
      </Container>
    </>
  );
}
