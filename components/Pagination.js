import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const Pagination = ({ items, setItems, length, paginationNum }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pervNum, setPervNum] = useState(0);
  const [nextNum, setNextNum] = useState(paginationNum);
  const { searched_data } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (searched_data) {
      setPageNum(1);
      setPervNum(0);
      setNextNum(paginationNum);

      if (searched_data.length > 7) {
        const filtered = items.filter(
          (item, ind) => ind >= pervNum && ind < nextNum
        );
        setItems(filtered);
      } else {
        setItems(searched_data);
      }
    } else {
      if (items && items.length > 0) {
        const filtered = items.filter(
          (item, ind) => ind >= pervNum && ind < nextNum
        );
        setItems(filtered);
      }
    }
  }, [items, nextNum, pervNum, searched_data]);
  useEffect(() => {
    if (length - (nextNum - 1) === 0) {
      alert("hi");
      setPervNum(pervNum - paginationNum);
      setNextNum(length);
      setPageNum(pageNum - 1);
    }
  }, [length]);

  const handleNext = () => {
    if (nextNum < length) {
      if (length - nextNum < paginationNum) {
        setNextNum(length);
        setPervNum(pervNum + paginationNum);
      } else {
        setNextNum(nextNum + paginationNum);
        setPervNum(pervNum + paginationNum);
      }
      setPageNum(pageNum + 1);
    }
  };
  const handlePerv = () => {
    if (pervNum > 0) {
      if (length === nextNum) {
        setNextNum(pervNum);
      } else {
        setNextNum(nextNum - paginationNum);
      }
      setPervNum(pervNum - paginationNum);
      setPageNum(pageNum - 1);
    }
  };

  return (
    <>
      <div className="float-end mt-4 ">
        <span>{pageNum}</span> of
        <span> {Math.ceil(length / paginationNum)} </span>
      </div>

      <div className="d-flex justify-content-center align-items-center py-3">
        <Button variant="primary" size="sm" onClick={handlePerv}>
          <IoIosArrowBack />
        </Button>
        <div className="px-3 bg-white py-1 m-2 ">{pageNum}</div>
        <Button variant="primary" size="sm" onClick={handleNext}>
          <IoIosArrowForward />
        </Button>
      </div>
    </>
  );
};

export default Pagination;
