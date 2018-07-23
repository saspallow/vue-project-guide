import axios from "axios";

const getUsers = () => {
  return axios
    .get("/api/users")
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export { getUsers };
