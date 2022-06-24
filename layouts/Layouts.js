import Head from "next/head";
import React, { useEffect, useState } from "react";
import {Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../modals/AddItem";
import CreateItem from "../modals/CreateItem";
import { getProduct } from "../redux/actions";
import Sidebar from "./Sidebar";

const Layouts = ({ children }) => {
  const { loading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [createItemModal, setCreateItemModal] = useState(false);
  const [addItemModal, setAddItemModal] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
  }, []);


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
          <Sidebar setCreateItemModal={setCreateItemModal} setAddItemModal={setAddItemModal}/>
        </div>
        <div className="right-side-layout py-3">
          {/* <Header /> */}
          {children}
        </div>
      </div>

      <CreateItem show={createItemModal}
        onHide={() => setCreateItemModal(false)}/>
        <AddItem show={addItemModal}
        onHide={() => setAddItemModal(false)}/>
    </>
  );
};

export default Layouts;
