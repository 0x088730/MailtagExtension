import AddTeamMember from "components/teamManagement/AddTeamMember";
import EmptyTeam from "components/teamManagement/EmptyTeam";
import TeamModal from "components/teamManagement/TeamModal";
import config from "../../config";
import React, { useState } from "react";
import useFetch from "hooks/useFetch";
import TeamDetails from "./TeamDetails";
import SimpleCardGroups from "components/SimpleCardsGroup";
import { Row } from "reactstrap";
function Team() {
  const [open, setOpen] = useState(false);
  const handleActive = () => {
    setOpen(!open);
  };
  const [team] = useFetch(config.team);
  const [teamInvites] = useFetch(config.teamInvites);
  const [infoData] = useFetch(config.dashboardData);
  return (
    <>
      <div className="content ">
        {teamInvites && teamInvites.teamInvites ? (
          <div className="content">
            <Row>
              <SimpleCardGroups infoData={infoData} />
            </Row>
            <TeamDetails
              data={teamInvites.teamInvites}
              setOpen={handleActive}
              open={open}
            />
          </div>
        ) : (
          <EmptyTeam open={open} setOpen={handleActive} />
        )}
        <TeamModal open={open} setOpen={handleActive} />
      </div>
    </>
  );
}

export default Team;
