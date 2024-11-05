import {Avatar, FormControl, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';

import style from './ChatMain.module.css';
import MessageItem from "../MessageItem/MessageItem";
import {IChatMessage} from "../types";

const ChatMain = () => {
    const mockMessagesList: IChatMessage[] = [
        {
            id: 1,
            chat_id: 1,
            author: 'Bob',
            text: 'Hello, my friend!'
        },
        {
            id: 2,
            chat_id: 1,
            author: 'Jorj',
            text: 'Hi there :)'
        },
    ]

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
                  {mockMessagesList.map((message: IChatMessage) => (
                      <MessageItem message={message} key={message.id}/>
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