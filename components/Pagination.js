import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ items, setItems, length }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pervNum, setPervNum] = useState(0);
  const [nextNum, setNextNum] = useState(7);

  useEffect(() => {
    if (items && items.length > 0) {
      const filtered = items.filter(
        (item, ind) => ind >= pervNum && ind < nextNum
      );
      setItems(filtered.reverse());
      //   let num = products.length / 7;

      //   setPageNum(Math.ceil(num));
    }
}, [items, nextNum, pervNum]);
useEffect(()=>{
    console.log("perv num===",pervNum);
      console.log("next num===", nextNum);

  },[nextNum,pervNum])

  //   const handlePagination = (number) => {
  //     setActivePageNum(number);
  //     if (activePageNum < number) {
  //       setPervNum(pervNum + 7);
  //       if (products.length - nextNum < 7) {
  //         setNextNum(products.length);
  //       } else {
  //         setNextNum(nextNum + 7);
  //       }
  //     } else if (activePageNum > number) {
  //       setPervNum(pervNum - 7);
  //       if (products.length - pervNum < 7) {
  //         setNextNum(pervNum);
  //       } else {
  //         setNextNum(nextNum - 7);
  //       }
  //     }
  //   };

  const handleNext = () => {
    if (items.length - nextNum < 7) {
      setNextNum(nextNum + items.length - nextNum);
    } else  {
      setNextNum(nextNum + 7);
      setPervNum(pervNum + 7);

    }

    setPageNum(pageNum + 1);
  };
  const handlePerv = () => {
    setPervNum(pervNum - 7);
    setNextNum(nextNum - 7);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-3">
        <Button variant="primary" size="sm" onClick={handlePerv}>
          {" "}
          <IoIosArrowBack />{" "}
        </Button>
        <div className="px-2">{pageNum}</div>
        <Button variant="primary" size="sm" onClick={handleNext}>
          {" "}
          <IoIosArrowForward />{" "}
        </Button>
      </div>
    </>
  );
};

export default Pagination;
