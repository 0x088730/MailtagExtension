import { ACCESS_TOKEN } from "constract/utilis";

const retrieveToken = () => localStorage.getItem(ACCESS_TOKEN);
const setOptions = (options) => {
  return Object.assign(options, {
    headers: {
      Authorization: `Bearer ${retrieveToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
    },
  });
};
const customFetch = async (url, options = {}) => {
  return fetch(`${url}`, setOptions(options))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
export { customFetch };
