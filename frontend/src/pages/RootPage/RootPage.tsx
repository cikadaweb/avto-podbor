import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import TheHeader from "../../components/Header/Header";
import MainPage from "../MainPage/MainPage";
import ModelInfoPage from "../ModelInfoPage/ModelInfoPage";
import AuthPage from "../AuthPage/AuthPage";
import ChatPage from "../ChatPage/ChatPage";
import { useTypedSelector } from "../../hooks/redux";

const AppContent = () => {
    // Получаем isAuthenticated из Redux
    const { isAuthenticated } = useTypedSelector(state => state.user);

    return (
        <>
            {isAuthenticated && <TheHeader />}

            <main>
                <Container maxWidth="xl">
                    <Routes>
                        <Route path="/login" element={<AuthPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/model/:id" element={<ModelInfoPage />} />
                        <Route path="/chat/:id" element={<ChatPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Container>
            </main>
        </>
    );
};

export default AppContent;