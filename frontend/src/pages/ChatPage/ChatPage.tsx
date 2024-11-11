import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import ChatSidebar from "../../components/Chat/ChatSidebar/ChatSidebar";
import ChatMain from "../../components/Chat/ChatMain/ChatMain";

const ChatPage = () => {
    return (
        <Box sx={{padding: "20px"}}>
            <Paper elevation={3}>
                <Grid container>
                    <Grid size={4}>
                        <ChatSidebar/>
                    </Grid>
                    <Grid size={8}>
                        <ChatMain/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
};

export default ChatPage;
