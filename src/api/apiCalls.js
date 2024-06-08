import axios from "axios";

const apiURLMain = process.env.REACT_APP_API_URL;

export const fetchUser = () => {
  return axios.get(`${process.env.REACT_APP_API_URL_USER}`);
};

export const fetchUserMessageCount = (userId) => {
  return axios.get(`${apiURLMain}/api/messages/count/${userId}`);
};

export const fetchUserMessages = (userId) => {
  return axios.get(`${apiURLMain}/api/messages/user/${userId}`);
};

export const fetchUserMessage = (id, userId) => {
  return axios.get(`${apiURLMain}/api/messages/${id}/${userId}`);
};

export const updateReadStatus = (id, userId) => {
  return axios.put(`${apiURLMain}/api/messages/read-update/${id}/${userId}`, {
    isRead: true,
  });
};
