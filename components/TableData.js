import React from "react";
import { Button, Table } from "react-bootstrap";

const TableData = () => {
  return (
    <div className="bg-white">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Bag Id</th>
            <th>Bag Name</th>
            <th>Bag Price</th>
            <th>Bag Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Button variant="primary" size="sm">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>
              <Button variant="primary" size="sm">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
