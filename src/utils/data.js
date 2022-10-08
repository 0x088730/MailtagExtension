import moment from "moment";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
const getCurrentMonth = months[d.getMonth()];
const getCurrentDay = d.getDate();
const getTheLoopOfDates = (start, end) => {
  const startDate = moment(start, "DD-MM-YYYY");
  const endDate = moment(end, "DD-MM-YYYY");
  start = startDate.date();
  end = endDate.date();
  let element = [];
  for (let index = start; index <= end; index++) {
    element.push(index);
  }
  return element;
};
export { getCurrentDay, getCurrentMonth, getTheLoopOfDates };
