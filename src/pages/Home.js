import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { Context } from "../context/MainContext";
import { fetchUserMessageCount } from "../api/main";
import { countFetchSuccess } from "../context/Action";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const Home = () => {
  const { dispatch, user, messagesCount } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMessageCount = async () => {
      setLoading(true);
      try {
        const res = await fetchUserMessageCount(user?._id);
        dispatch(countFetchSuccess(res.data));
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

    handleMessageCount();
  }, [dispatch, user?._id]);

  return (
    <div className="home">
      <h1 className="home__title">Hello {user?.firstName}</h1>

      {loading ? (
        <ReactLoading color="#0092ff" width={50} height={50} type="spin" />
      ) : messagesCount?.total > 0 ? (
        <>
          <h2 className="home__subTitle">
            You have {messagesCount?.unread} unread{" "}
            {messagesCount?.unread > 1 ? "messages" : "message"} out of{" "}
            {messagesCount?.total} total
          </h2>

          {messagesCount?.total > 0 && (
            <Link to="/inbox">
              <Button title="View Message" />
            </Link>
          )}
        </>
      ) : (
        <h2 className="home__subTitle">No Message</h2>
      )}
    </div>
  );
};

export default Home;
