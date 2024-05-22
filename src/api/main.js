import axios from "axios";

const apiURLMain = process.env.REACT_APP_API_URL;

export const fetchUser = () => {
  return axios.get(`${process.env.REACT_APP_API_URL_USER}`);
};

export const fetchUserMessageCount = (id) => {
  return axios.get(`${apiURLMain}/api/messages/count/${id}`);
};

export const fetchUserMessages = (id) => {
  return axios.get(`${apiURLMain}/api/messages/user/${id}`);
};

export const fetchUserMessage = (id) => {
  return axios.get(`${apiURLMain}/api/messages/${id}`);
};

export const updateReadStatus = (id) => {
  return axios.put(`${apiURLMain}/api/messages/read-update/${id}`, {
    isRead: "true",
  });
};
