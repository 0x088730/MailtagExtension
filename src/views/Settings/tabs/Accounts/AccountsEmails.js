import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
const AccountsEmails = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>EMAIL ADDRESS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="inline-block">
              <div
                className="email_record_avatar"
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {user?.email && user?.email.charAt(0)}
              </div>
              <span>{user?.email && user?.email}</span>
            </td>
            <td>
              <div className="email-div">
                <button
                  className="upgrade-plan-btn win_btn_padding_bottom"
                  email={user?.email && user?.email}
                >
                  Upgrade
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default AccountsEmails;
