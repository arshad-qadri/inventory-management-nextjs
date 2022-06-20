import Head from "next/head";
import React, { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  const { loading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    console.log("loading==", loading);
  }, [loading]);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-100 vh-100 bg-light layout overflow-hidden">
        {loading && (
          <div className="isloading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div className="left-side-layout">
          <Sidebar />
        </div>
        <div className="right-side-layout py-3">
          {/* <Header /> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layouts;
