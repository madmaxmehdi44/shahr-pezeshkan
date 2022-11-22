import { apiAddress } from "common";

const token = localStorage.getItem("__token");
const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const Fetch = {
  get: (endpoint, callback, failed = null) => {
    fetch(apiAddress + endpoint, {
      method: "GET",
      headers: header,
    })
      .then((response) => {
        if (response.status >= 300) failed && failed();
        return response.json();
      })
      .catch(() => (failed ? failed() : null))
      .then((response) => callback(response));
  },
  post: (endpoint, data, callback, failed = null) => {
    fetch(apiAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: header,
    })
      .then((response) => {
        if (response.status >= 300) failed && failed();
        return response.json();
      })
      .catch(() => (failed ? failed() : null))
      .then((response) => callback(response));
  },
  put: (endpoint, data, callback, failed = null) => {
    fetch(apiAddress + endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: header,
    })
      .then((response) => {
        if (response.status >= 300) failed && failed();
        return response.json();
      })
      .catch(() => (failed ? failed() : null))
      .then((response) => callback(response));
  },

  delete: (endpoint, callback, failed = null) => {
    fetch(apiAddress + endpoint, {
      method: "DELETE",
      headers: header,
    })
      .then((response) => {
        if (response.status >= 300) failed && failed();
        return response.json();
      })
      .catch(() => (failed ? failed() : null))
      .then((response) => callback(response));
  },
  check: (callback) => {
    fetch(apiAddress + "/check", {
      method: "POST",
      headers: header,
    })
      .then((res) => {
        return res.status === 200 ? true : false;
      })
      .then((response) => callback(response));
  },
};

// Object.freeze(Fetch);

export default Fetch;
