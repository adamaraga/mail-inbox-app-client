import React from "react";

const InboxItemCard = ({ message }) => {
  return (
    <div className={message.isRead ? "inboxItemCard" : "inboxItemCard unread"}>
      <h3 className="inboxItemCard__title">{message?.subject}</h3>
      <p className="inboxItemCard__disc">
        {message?.content.substring(0, 25)}...{" "}
      </p>
    </div>
  );
};

export default InboxItemCard;
