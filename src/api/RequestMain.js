import { toast } from "react-toastify";

export const fetchRequest = async (setLoading, onSucess, apiCall) => {
  setLoading(true);
  try {
    const res = await apiCall;
    onSucess(res);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

export const fetchRequestWithoutLoading = async (onSucess, apiCall) => {
  try {
    const res = await apiCall;
    onSucess(res);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

export const fetchSilentRequest = async (onSucess, apiCall) => {
  try {
    const res = await apiCall;
    onSucess(res);
  } catch (err) {}
};
