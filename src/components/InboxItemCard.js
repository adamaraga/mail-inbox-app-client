import React from "react";

const InboxItemCard = ({ message }) => {
  return (
    <div
      className={
        message.isRead ? "inbox__main__item" : "inbox__main__item unread"
      }
    >
      <h3>{message?.subject}</h3>
      <p>{message?.content.substring(0, 25)}... </p>
    </div>
  );
};

export default InboxItemCard;
