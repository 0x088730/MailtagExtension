import React from "react";
import { Table } from "reactstrap";
import HiddenElementTable from "./Tabs/HiddenElementTable";
import { useState } from "react";
const InboxElements = ({ data }) => {
  const [activeRow, setActiveRow] = useState({ active: false, index: null });
  return (
    <Table hover borderless>
      <thead className="text-primary">
        <tr>
          <th>RECIPIENT</th>
          <th>SUBJECT</th>
          <th>ACTIVITY</th>
          <th className="text-right">TIME</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr
              style={{
                borderBottom: "1px solid rgb(241, 238, 238)",
                height: "60px",
              }}
              key={`inbxtbl_${index}`}
              onMouseEnter={() => setActiveRow({ active: true, index: index })}
              onMouseLeave={() => setActiveRow({ active: false, index: null })}
            >
              <td>{item.recipient}</td>
              <td>{item.subject}</td>
              <td>{item?.activity}</td>
              <td className="text-right">
                {/* <Moment fromNow>{item.time}</Moment> */}
                {item.time}
              </td>
              <HiddenElementTable
                data={data}
                activeRow={activeRow}
                index={index}
              />
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
export default InboxElements;
