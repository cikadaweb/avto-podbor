import TheHeader from "./components/Header/Header.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Catalog} from "./components/Catalog/Catalog.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import {ModalDelivery} from "./components/ModalDelivery/ModalDelivery.jsx";
import Container from '@mui/material/Container';
import {useState} from "react";

export const App = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = (value) => () => {
        setIsSidebarOpen(value);
    };

    return (
        <Provider store={store}>
            <TheHeader toggleSidebar={toggleSidebar}/>
            <main>
                <Container maxWidth="xl">
                    <Navigation/>
                    <Catalog isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                </Container>
            </main>
            {/*<Footer/>*/}
            {/*<ModalDelivery/>*/}
        </Provider>
    )
}
