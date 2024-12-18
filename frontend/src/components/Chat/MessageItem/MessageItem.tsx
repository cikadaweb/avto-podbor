import {useState} from "react";

import classNames from "classnames";

import style from './MessageItem.module.css';
import {IChatMessage} from "../types";
import {formatTime} from "../../../helpers/DateFormatHelper";

interface IMessageItemProps {
    message: IChatMessage,
};

const MessageItem = ({message}: IMessageItemProps) => {
    const [currentUser, setCurrentUser] = useState('Temp');

    const className = classNames(
        style.message,
        message.name === currentUser && style.message_receive
    );

  return (
      <p className={className}>
          <span className={style.author}>{message.name}</span>
          <div className={style.text}>{message.message}</div>
          <span className={style.timestamp}>{formatTime(message.timestamp)}</span>
      </p>
  );
};

export default MessageItem;