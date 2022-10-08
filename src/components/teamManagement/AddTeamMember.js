import React from "react";
import { useSelector } from "react-redux";
const AddTeamMember = ({ setOpen }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="text-center">
        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3">
          <h2 className="team-heading">Your team</h2>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
            id="team-management-content"
          >
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 owner-details-table"
              id="owner-details-table"
            >
              <table className="table" id="owner-table">
                <thead>
                  <tr>
                    <th className="col-md-1 name-heading">OWNER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="team-management-row">
                    <td className="avatar">
                      <div id="sender-logo-hakanselam7@gmail.com">
                        <div className="email_record_avatar">
                          {user.email.charAt(1)}
                        </div>
                      </div>
                    </td>
                    <td className="name" title={user.email}>
                      {user.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <div className="add-members" id="add-members">
                <a
                  onClick={() => setOpen()}
                  href="#!"
                  id="add-signatures"
                  style={{ width: "300px" }}
                  className="signature-button"
                >
                  Add Users
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTeamMember;
