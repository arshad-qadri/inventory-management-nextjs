import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ items, setItems, length, paginationNum }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pervNum, setPervNum] = useState(0);
  const [nextNum, setNextNum] = useState(paginationNum);

  useEffect(() => {
    if (items && items.length > 0) {
      const filtered = items.filter(
        (item, ind) => ind >= pervNum && ind < nextNum
      );
      setItems(filtered);
    }
  }, [items, nextNum, pervNum]);

  const handleNext = () => {
    console.log("next", nextNum);
    console.log("perv", pervNum);
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
    console.log("next", nextNum);
    console.log("perv", pervNum);

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
