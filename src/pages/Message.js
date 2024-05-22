import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/MainContext";
import { messageFetchSuccess, updateReadSuccess } from "../context/Action";
import { fetchUserMessage, updateReadStatus } from "../api/main";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const Message = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { dispatch, message, messagesCount } = useContext(Context);

  useEffect(() => {
    const handleFetchMessage = async () => {
      setLoading(true);
      try {
        const res = await fetchUserMessage(id);
        if (res.data) {
          if (!res.data?.isRead) {
            try {
              const response = await updateReadStatus(id);
              if (response.data) {
                dispatch(updateReadSuccess());
              }

              dispatch(messageFetchSuccess(res.data));
              setLoading(false);
            } catch (error) {
              dispatch(messageFetchSuccess(res.data));
              setLoading(false);
            }
          }
        }
      } catch (err) {
        setLoading(false);
        toast.error("Fetch failed");
      }
    };

    handleFetchMessage();
  }, [dispatch, id]);

  console.log("messsageCount", messagesCount);
  return (
    <div className="message">
      {loading ? (
        <ReactLoading color="#0092ff" width={50} height={50} type="spin" />
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
