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

  const handleMessageCount = async () => {
    if (pathname !== "/") {
      try {
        const res = await fetchUserMessageCount(user?._id);
        dispatch(countFetchSuccess(res.data));
      } catch (err) {
        toast.error("Fetch failed");
      }
    }
  };

  useEffect(() => {
    handleMessageCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="topbar">
      <Link to="/">
        <h1 className="topbar__title">Mail</h1>
      </Link>
      <div className="topbar__main">
        <Link to="/inbox">
          <div className="topbar__main__message">
            <img src={MessageIcon} alt="" />
            {messagesCount?.unread > 0 && <span>{messagesCount?.unread}</span>}
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
