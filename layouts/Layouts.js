import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddItem from "../modals/AddItem";
import CreateItem from "../modals/CreateItem";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/actions";
import Loading from "../components/Loading";

const Layouts = ({ children }) => {
  const { loading } = useSelector((state) => state.productReducer);
  const [createItemModal, setCreateItemModal] = useState(false);
  const [addItemModal, setAddItemModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[])

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        {/* <link rel="shortcut icon" href="../public/" /> */}
      </Head>
      <div className="w-100 vh-100 bg-light layout overflow-hidden">
        <div
          className="toggle"
          style={{ left: toggle ? "180px" : "20px" }}
          onClick={handleToggle}
        >
          <div className="toggle_btn">
            {toggle ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
        </div>
        {loading && (
          <Loading/>
        )}
        <div
          className="left-side-layout"
          style={{ left: toggle ? "0px" : "-200px" }}
          id="sidebar"
        >
          <Sidebar
            setCreateItemModal={setCreateItemModal}
            setAddItemModal={setAddItemModal}
            products={products}
          />
        </div>
        <div className="right-side-layout">
          {children}
        </div>
      </div>

      <CreateItem
        show={createItemModal}
        onHide={() => setCreateItemModal(false)}
      />
      <AddItem show={addItemModal} onHide={() => setAddItemModal(false)} />
      <ToastContainer />
    </>
  );
};

export default Layouts;
