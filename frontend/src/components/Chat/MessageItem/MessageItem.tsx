import {useState} from "react";

import classNames from "classnames";

import style from './MessageItem.module.css';
import {IChatMessage} from "../types";

interface IMessageItemProps {
    message: IChatMessage,
};

const MessageItem = ({message}: IMessageItemProps) => {
    const [currentUser, setCurrentUser] = useState('Bob');

    const className = classNames(
        style.message,
        message.author === currentUser && style.message_receive
    );

  return (
      <p className={className}>
          <span className={style.author}>{message.author}</span>
          <div className={style.text}>{message.text}</div>
          <span className={style.timestamp}>{new Date().toISOString()}</span>
      </p>
  );
};

export default MessageItem;