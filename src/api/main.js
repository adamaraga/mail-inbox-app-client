import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const fetchUser = () => {
  return axios.get(`${process.env.REACT_APP_API_URL_USER}`);
};

export const fetchUserMessageCount = (id) => {
  return axios.get(`${apiURL}/api/messages/count/${id}`);
};

export const fetchUserMessages = (id) => {
  return axios.get(`${apiURL}/api/messages/user/${id}`);
};

export const fetchUserMessage = (id) => {
  return axios.get(`${apiURL}/api/messages/${id}`);
};

export const updateReadStatus = (id) => {
  return axios.put(`${apiURL}/api/messages/read-update/${id}`, {
    isRead: "true",
  });
};
