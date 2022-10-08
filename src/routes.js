import Dashboard from "views/Dashboard";
import Inbox from "views/Inbox";
import Pings from "views/Pings";
import Team from "views/Team";
import Settings from "views/Settings";
import Support from "views/Support";
import Signature from "views/Signature";
import InboxDetails from "views/Inbox/InboxDetails";
import Logout from "views/Logout";
import PingSequenceDetails from "views/Pings/PingSequences/PingSequenceDetails";
import NewPingSequences from "views/Pings/PingSequences/NewPingSequences";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inbox",
    name: "Inbox",
    icon: "nc-icon nc-send",
    component: Inbox,
    layout: "/admin",
  },
  {
    path: "/email-details/:path",
    name: "EmailDetails",
    icon: "",
    component: InboxDetails,
    layout: "/admin",
  },
  {
    path: "/ping-sequence-details/:id",
    name: "pingSequenceDetails",
    icon: "",
    component: PingSequenceDetails,
    layout: "/admin",
  },
  {
    path: "/pings/new-ping-sequence",
    name: "newPingsSequence",
    icon: "",
    component: NewPingSequences,
    layout: "/admin",
  },
  {
    path: "/signature",
    name: "Signatures Generator",
    icon: "nc-icon nc-ruler-pencil",
    component: Signature,
    layout: "/admin",
  },
  {
    path: "/pings",
    name: "Pings",
    icon: "nc-icon nc-bell-55",
    component: Pings,
    layout: "/admin",
  },
  {
    path: "/team",
    name: "Team",
    icon: "nc-icon nc-single-02",
    component: Team,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-65",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support",
    icon: "nc-icon nc-support-17",
    component: Support,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/logout",
    name: "Log Out",
    icon: "nc-icon nc-button-power",
    component: Logout,
    layout: "/admin",
  },
];
export default routes;
