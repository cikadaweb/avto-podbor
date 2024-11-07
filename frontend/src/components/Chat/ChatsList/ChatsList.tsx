import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import style from './ChatsList.module.css'

const  ChatsList = () => {
  return (
      <List className={style.chat}>
          {['Adrian', 'Bob', 'Sam'].map((chat) => (
              <ListItem className={style.item} key={chat}>
                  <ListItemAvatar>
                      <Avatar>{chat[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                      <Box>
                          <Typography
                              component="span"
                              variant="h6"
                              sx={{ color: 'text.primary', display: 'inline' }}
                          >
                              {chat}
                          </Typography>
                      </Box>
                      <Box>
                          <Typography
                              component="span"
                              variant="body2"
                              sx={{ color: 'text.primary', display: 'inline' }}
                          >
                              Last message...
                          </Typography>
                      </Box>
                  </ListItemText>
              </ListItem>
          ))}
      </List>
  );
};

export default ChatsList;