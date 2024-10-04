import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Provider} from "react-redux";

import Container from '@mui/material/Container';
import {ModelInfoPage} from "./pages/ModelInfoPage/ModelInfoPage";
import {MainPage} from "./pages/MainPage/MainPage";
import TheHeader from "./components/Header/Header";

import {store} from "./store";


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
            </BrowserRouter>
        </Provider>
    )
}
