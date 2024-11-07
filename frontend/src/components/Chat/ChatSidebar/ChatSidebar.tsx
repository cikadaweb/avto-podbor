import {Avatar, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from "@mui/material/Box";

import style from './ChatSidebar.module.css';
import ChatsList from "../ChatsList/ChatsList";

const ChatSidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.header}>
                <Avatar>А</Avatar>
                <div>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <Box sx={{padding: '16px'}}>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Поиск сообщения"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                        },
                    }}
                />
            </Box>

            <ChatsList/>
        </div>
    )
};

export default ChatSidebar;