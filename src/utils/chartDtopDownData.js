import moment from "moment";

const date = moment();

const chartDropDownData = [
  // {
  //   id: "select_range",
  //   label: "Select Range",
  //   url: `start=${date.startOf("week").format("DD-MM-YYYY")}&end=${date
  //     .endOf("week")
  //     .format("DD-MM-YYYY")}`,
  // },
  {
    id: "this_week",
    label: "This Week",
    start: date.startOf("week").format("DD-MM-YYYY"),
    end: moment().format("DD-MM-YYYY"),
  },
  {
    id: "last_week",
    label: "Last Week",
    start: moment(
      moment().subtract(1, "weeks").startOf("week").toDate()
    ).format("DD-MM-YYYY"),
    end: moment(moment().subtract(1, "weeks").endOf("week").toDate()).format(
      "DD-MM-YYYY"
    ),
  },
  {
    id: "this_month",
    label: "This Month",
    start: moment(moment().startOf("month").toDate()).format("DD-MM-YYYY"),
    end: moment(moment().toDate()).format("DD-MM-YYYY"),
  },
  {
    id: "last_month",
    label: "Last Month",
    start: moment(
      moment().subtract(1, "months").startOf("month").toDate()
    ).format("DD-MM-YYYY"),
    end: moment(moment().subtract(1, "months").endOf("month").toDate()).format(
      "DD-MM-YYYY"
    ),
  },
  {
    id: "this_year",
    label: "This Year",
    start: moment(moment().startOf("year").toDate()).format("DD-MM-YYYY"),
    end: moment(moment().toDate()).format("DD-MM-YYYY"),
  },
  {
    id: "last_year",
    label: "Last Year",
    start: moment(
      moment().subtract(1, "years").startOf("year").toDate()
    ).format("DD-MM-YYYY"),
    end: moment(moment().subtract(1, "years").endOf("year").toDate()).format(
      "DD-MM-YYYY"
    ),
  },
  {
    id: "custom_range",
    label: "Custom Range",
    start: date.startOf("week").format("DD-MM-YYYY"),
    end: date.endOf("week").format("DD-MM-YYYY"),
  },
];
export default chartDropDownData;
