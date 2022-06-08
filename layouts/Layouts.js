import Head from "next/head";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-100 vh-100 bg-light layout overflow-hidden">
        <div className="left-side-layout">
          <Sidebar />
        </div>
        <div className="right-side-layout">
          {/* <Header /> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layouts;
