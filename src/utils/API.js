import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?results=100&&inc=name,email,dob,phone,picture&nat=US";

// eslint-disable-next-line
export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
