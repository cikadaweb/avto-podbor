import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";

import {Navigation} from "../../components/Navigation/Navigation";
import {CarsCatalog} from "../../components/Catalog/CarsCatalog/CarsCatalog";
import {CatalogFilters} from "../../components/CatalogFilters/CatalogFilters";
import {useTypedSelector} from "../../hooks/redux";
import {Navigate} from "react-router-dom";

const MainPage = () => {
    const { isAuthenticated } = useTypedSelector(state => state.user);

    if(!isAuthenticated) {
        return <Navigate to="/login"/>
    }

    return (
        <>
            <Navigation/>

            <Box>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <CatalogFilters/>
                    </Grid>
                    <Grid size={8}>
                        <CarsCatalog/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default MainPage;