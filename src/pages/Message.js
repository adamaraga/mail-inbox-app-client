import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/MainContext";
import { messageFetchSuccess, updateReadSuccess } from "../context/Action";
import { fetchUserMessage, updateReadStatus } from "../api/apiCalls";
import { fetchRequest, fetchSilentRequest } from "../api/RequestMain";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

const Message = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { dispatch, message, user } = useContext(Context);

  useEffect(() => {
    if (user?._id) {
      const apiCall = fetchUserMessage(id, user?._id);
      const onSucess = async (res) => {
        if (!res.data?.isRead) {
          const apiCallAlt = updateReadStatus(id, user?._id);
          const onSucessAlt = async () => {
            dispatch(updateReadSuccess());
          };
          fetchSilentRequest(onSucessAlt, apiCallAlt);
        }
        dispatch(messageFetchSuccess(res.data));
      };
      fetchRequest(setLoading, onSucess, apiCall);
    }
  }, [dispatch, id, user?._id]);

  return (
    <div className="message">
      <BackButton to="/inbox" />

      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>{message?.subject}</h1>
          <p>{message?.content}</p>
        </>
      )}
    </div>
  );
};

export default Message;
