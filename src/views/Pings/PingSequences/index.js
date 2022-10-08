import React from "react";
import { Card, Col, Row, Table } from "reactstrap";
const PingeSequences = ({ data }) => {
  return (
    <>
      <br /> <br />{" "}
      <Row>
        <Col lg={12}>
          <Table className="table">
            <thead className="text-primary">
              <tr>
                <th>PING SEQUENCE</th>
                <th>NUMBER OF PINGS </th>
                <th>SEQUENCE DURATION </th>
                <th className="text-right"> </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={`sequence_index_${index}`}>
                    <td>{item.name}</td>
                    <td>{item.pingsCount}</td>
                    <td>{item.duration}</td>
                    <td className="edit-sequence">
                      <a className="edit-link" href={`pings/${item.id}`}>
                        EDIT SEQUENCE
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};
export default PingeSequences;
