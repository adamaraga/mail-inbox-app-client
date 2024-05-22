import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserMessages } from "../api/main";
import { Context } from "../context/MainContext";
import { toast } from "react-toastify";
import { messagesFetchSuccess } from "../context/Action";
import ReactLoading from "react-loading";
import InboxItemCard from "../components/InboxItemCard";

const Inbox = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch, user, messages } = useContext(Context);

  useEffect(() => {
    const handleFetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetchUserMessages(user?._id);
        dispatch(messagesFetchSuccess(res.data));
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

    handleFetchMessages();
  }, [dispatch, user?._id]);

  return (
    <div className="inbox">
      <h1>Messages</h1>

      {loading ? (
        <ReactLoading color="#0092ff" width={50} height={50} type="spin" />
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
