import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserMessages } from "../api/apiCalls";
import { Context } from "../context/MainContext";
import { messagesFetchSuccess } from "../context/Action";
import InboxItemCard from "../components/InboxItemCard";
import { fetchRequest } from "../api/RequestMain";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

const Inbox = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch, user, messages } = useContext(Context);

  useEffect(() => {
    if (user?._id) {
      const apiCall = fetchUserMessages(user?._id);
      const onSucess = (res) => {
        dispatch(messagesFetchSuccess(res.data));
      };

      fetchRequest(setLoading, onSucess, apiCall);
    }
  }, [dispatch, user?._id]);

  return (
    <div className="inbox">
      <BackButton to="/" />
      <h1 className="inbox__title">Messages</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="inbox__main">
          {messages?.map((message) => {
            return (
              <Link key={message._id} to={`/message/${message._id}`}>
                <InboxItemCard message={message} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Inbox;
