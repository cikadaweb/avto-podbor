import React, {useState} from "react";
import {Navigate} from "react-router-dom";

import Box from "@mui/material/Box";
import {Button, Card, CardActions, CardContent, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import style from './AuthPage.module.css';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {loginUser} from "../../store/user/userAsyncActions";

const AuthPage = () => {
    const dispatch = useTypedDispatch();

    const { isAuthenticated } = useTypedSelector(state => state.user);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    const handleSubmit = async () => {
        try {
            const response = await dispatch(loginUser({
                username,
                password
            }));

            if (loginUser.fulfilled.match(response)) {
                return <Navigate to="/" replace/>;
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <Box className={style.page}>
            <Card className={style.card}>
                <CardContent>
                    <Typography sx={{marginBottom: '20px', textAlign: 'center'}} variant="h4" component="div">Войти</Typography>
                    <form action="#" method="POST">
                        <Grid container direction="column" justifyContent="space-between" spacing={2}>
                            <Grid>
                                <FormControl fullWidth>
                                    <TextField
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        fullWidth
                                        required
                                        label="Имя пользователя"
                                        variant="outlined"
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>

                            <Grid>
                                <FormControl fullWidth>
                                    <TextField
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                        label="Пароль"
                                        type="password"
                                        required
                                        variant="outlined"
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="large" fullWidth type="button" onClick={handleSubmit}>Войти</Button>
                </CardActions>
            </Card>
        </Box>
    )
};

export default AuthPage;