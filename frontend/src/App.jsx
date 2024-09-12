import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Provider} from "react-redux";

import Container from '@mui/material/Container';
import {ModelInfoPage} from "./pages/ModelInfoPage/ModelInfoPage.jsx";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import TheHeader from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {ModalDelivery} from "./components/ModalDelivery/ModalDelivery.jsx";

import {store} from "./store/index.js";


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <TheHeader />

                <main>
                    <Container maxWidth="xl">
                        <Routes>
                            <Route path="/" element={<MainPage />}></Route>
                            <Route path="/model">
                                <Route path=":id" element={<ModelInfoPage />} />
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Container>
                </main>
                {/*<Footer/>*/}
                {/*<ModalDelivery/>*/}
            </BrowserRouter>
        </Provider>
    )
}
