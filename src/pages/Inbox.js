import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserMessages } from "../api/main";
import { Context } from "../context/MainContext";
import { toast } from "react-toastify";
import { messagesFetchSuccess } from "../context/Action";
import ReactLoading from "react-loading";

const Inbox = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch, user, messages } = useContext(Context);

  const handleFetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetchUserMessages(user?._id);
      dispatch(messagesFetchSuccess(res.data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Fetch failed");
    }
  };

  useEffect(() => {
    handleFetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <div
                  className={
                    message.isRead
                      ? "inbox__main__item"
                      : "inbox__main__item unread"
                  }
                >
                  <h3>{message?.subject}</h3>
                  <p>{message?.content.substring(0, 25)}... </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Inbox;
