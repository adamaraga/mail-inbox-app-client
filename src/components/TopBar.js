import React, { useContext, useEffect } from "react";
import messageIcon from "../assets/images/mail.svg";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/MainContext";
import { countFetchSuccess } from "../context/Action";
import { fetchUserMessageCount } from "../api/apiCalls";
import { fetchRequestWithoutLoading } from "../api/RequestMain";

const TopBar = () => {
  const { dispatch, user, messagesCount } = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" && user?._id) {
      const apiCall = fetchUserMessageCount(user?._id);
      const onSucess = (res) => {
        dispatch(countFetchSuccess(res.data));
      };

      fetchRequestWithoutLoading(onSucess, apiCall);
    }
  }, [user?._id, dispatch, pathname]);

  return (
    <div className="topbar">
      <Link to="/">
        <h1 className="topbar__title">Mail</h1>
      </Link>
      <div className="topbar__main">
        <Link to="/inbox">
          <div className="topbar__main__message">
            <img
              className="topbar__main__message__icon"
              src={messageIcon}
              alt=""
            />
            {messagesCount?.unread > 0 && (
              <span className="topbar__main__message__num">
                {messagesCount?.unread}
              </span>
            )}
          </div>
        </Link>

        <p className="topbar__main__user">
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  );
};

export default TopBar;
