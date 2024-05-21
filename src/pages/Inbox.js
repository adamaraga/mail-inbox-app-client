import React, { useState } from "react";
import { Link } from "react-router-dom";

const Inbox = () => {
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

  return (
    <div className="inbox">
      <h1>Messages</h1>

      <div className="inbox__main">
        {messages?.map((message) => {
          return (
            <Link key={message.id} to={`/message/${message.id}`}>
              <div
                className={
                  message.isRead
                    ? "inbox__main__item"
                    : "inbox__main__item unread"
                }
              >
                <h3>{message?.subject}</h3>
                <p>{message?.content.substring(0, 16)}... </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
