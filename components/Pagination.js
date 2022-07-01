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
      setItems(filtered.reverse());
    }
  }, [items, nextNum, pervNum]);

  const handleNext = () => {
    if (items.length - nextNum < paginationNum) {
      setNextNum(items.length);
    } else {
      setNextNum(nextNum + paginationNum);
    }
    if (nextNum < items.length) setPervNum(pervNum + paginationNum);
    if (nextNum < items.length) {
      setPageNum(pageNum + 1);
    }
  };
  const handlePerv = () => {
    if (items.length === nextNum) {
      setNextNum(pervNum);
    } else {
      if (pervNum > 0) setNextNum(nextNum - paginationNum);
    }
    if (pervNum > 0) {
      setPervNum(pervNum - paginationNum);
      setPageNum(pageNum - 1);
    }
  };

  return (
    <>
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
