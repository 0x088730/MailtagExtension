import React from "react";
import { Card, CardBody, Table } from "reactstrap";
const SignatureData = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <br /> <br />
        <Table striped>
          <thead className="text-primary">
            <tr>
              <th>SIGNATURE NAME</th>
              <th>DEFAULT</th>
              <th>DATE CREATED</th>
              <th>DATE MODIFIED</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.signatures && 
              data.signatures.map((item, index) => {
                return (
                  <tr key={`signature_items_lists_${index}`}>
                    <td>{item.name}</td>
                    <td>
                      {item.isDefault ? (
                        <span
                          className="signature-default"
                          style={{ color: "limegreen" }}
                        >
                          DEFAULT ✓
                        </span>
                      ) : (
                        <span className="signature-default">MAKE DEFAULT</span>
                      )}
                    </td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td>
                      <a href={`/signature/${item}`}>EDIT</a>
                    </td>
                    <td>
                      <span id="13f070c2" className="signature-delete">
                        DELETE
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
export default SignatureData;
