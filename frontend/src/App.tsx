import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import RootPage from "./pages/RootPage/RootPage";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RootPage />
            </BrowserRouter>
        </Provider>
    );
};

export default App;