import axios from "axios";

export const fetchUser = () => {
  return axios.get("http://localhost:5000/api/auth/664cd10db83bc9d2559addef");
};

export const fetchUserMessageCount = (id) => {
  return axios.get(`http://localhost:5000/api/messages/count/${id}`);
};

export const fetchUserMessages = (id) => {
  return axios.get(`http://localhost:5000/api/messages/user/${id}`);
};

export const fetchUserMessage = (id) => {
  return axios.get(`http://localhost:5000/api/messages/${id}`);
};

export const updateReadStatus = (id) => {
  return axios.put(`http://localhost:5000/api/messages/read-update/${id}`, {
    isRead: "true",
  });
};
