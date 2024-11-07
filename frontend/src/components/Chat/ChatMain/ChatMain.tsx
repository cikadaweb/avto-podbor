import {useEffect, useState} from "react";

import {Avatar, FormControl, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';

import Pusher from 'pusher-js'

import style from './ChatMain.module.css';
import MessageItem from "../MessageItem/MessageItem";
import {IChatMessage} from "../types";
import {ApiMessages} from "../../../api";

const ChatMain = () => {

    const [messages, setMessages] = useState<IChatMessage[]>([]);

    useEffect(() => {
        const pusher = new Pusher(import.meta.env.VITE_PUSHER_API_KEY, {
            cluster: 'eu'
        });
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data: IChatMessage) => {setMessages([...messages, data])
        });
        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }
    }, [messages]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const pushNotification = () => {
        console.log('pushNotification');
    };

    const fetchMessages = async () => {
        try {
            const response = await ApiMessages.getSub<IChatMessage[]>('sync', pushNotification);
            if (response) {
                setMessages(response.data);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

  return (
      <div className={style.main}>
          <div className={style.header}>
              <Avatar>А</Avatar>
              <div>
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
                  <IconButton>
                      <AttachFile />
                  </IconButton>
                  <IconButton>
                      <MoreVert />
                  </IconButton>
              </div>
          </div>
          <div className={style.body}>
              <div className={style.messages}>
                  {messages.map((message: IChatMessage) => (
                      <MessageItem message={message} key={message.name}/>
                  ))}
              </div>
          </div>
          <div className={style.footer}>
              <form className={style.form} action="#" method="POST">
                  <InsertEmoticon/>
                  <FormControl fullWidth>
                      <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Введите сообщение"
                          variant="outlined"
                          size="small"
                      />
                  </FormControl>
                  <IconButton color="primary" aria-label="add to shopping cart" type="submit">
                      <SendIcon />
                  </IconButton>
              </form>
          </div>
      </div>
  )
};

export default ChatMain;