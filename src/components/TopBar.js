import React, { useContext, useEffect } from "react";
import MessageIcon from "../assets/images/mail.svg";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/MainContext";
import { toast } from "react-toastify";
import { countFetchSuccess } from "../context/Action";
import { fetchUserMessageCount } from "../api/main";

const TopBar = () => {
  const { dispatch, user, messagesCount } = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleMessageCount = async () => {
      if (pathname !== "/" && user?._id) {
        try {
          const res = await fetchUserMessageCount(user?._id);
          dispatch(countFetchSuccess(res.data));
        } catch (err) {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          toast.error(message);
        }
      }
    };

    handleMessageCount();
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
              src={MessageIcon}
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
