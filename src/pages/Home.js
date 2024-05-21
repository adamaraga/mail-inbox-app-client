import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const name = "Adam";
  const [messages, setMessages] = useState([
    {
      id: 112323,
      subject: "Hi again",
      content: "Just Wanted to check on your",
      isRead: false,
    },
    {
      id: 2357673,
      subject: "Hi again",
      content: "Just Wanted to check on your",
      isRead: false,
    },
    {
      id: 2638188,
      subject: "Hi again",
      content: "Just Wanted to check on your",
      isRead: true,
    },
  ]);

  useEffect(() => {
    const unreadMessage = messages.filter((message) => !message.isRead);
    const newUnreadMessageCount = unreadMessage.length;

    setUnreadMessageCount(newUnreadMessageCount);
  }, [messages]);

  return (
    <div className="home">
      <h1 className="home__title">Hello {name}</h1>
      <h2 className="home__subTitle">
        You have {unreadMessageCount} unread{" "}
        {unreadMessageCount > 1 ? "messages" : "message"} out of{" "}
        {messages.length} total
      </h2>

      <Link to="/inbox">
        <Button title="View Message" />
      </Link>
    </div>
  );
};

export default Home;
