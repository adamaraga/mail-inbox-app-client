import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { Context } from "../context/MainContext";
import { fetchUserMessageCount } from "../api/apiCalls";
import { countFetchSuccess } from "../context/Action";
import ReactLoading from "react-loading";
import { fetchRequest } from "../api/RequestMain";

const Home = () => {
  const { dispatch, user, messagesCount } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?._id) {
      const apiCall = fetchUserMessageCount(user?._id);
      const onSucess = (res) => {
        dispatch(countFetchSuccess(res.data));
      };

      fetchRequest(setLoading, onSucess, apiCall);
    }
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
