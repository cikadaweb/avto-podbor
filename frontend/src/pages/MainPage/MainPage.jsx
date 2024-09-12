import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

import {Navigation} from "../../components/Navigation/Navigation.jsx";
import {Catalog} from "../../components/Catalog/Catalog.jsx";
import {CatalogFilters} from "../../components/CatalogFilters/CatalogFilters.jsx";

export const MainPage = () => {

    return (
        <>
            <Navigation/>

            <Box>
                <Grid container>
                    <Grid item xs={3}>
                        <CatalogFilters/>
                    </Grid>
                    <Grid item xs={9}>
                        <Catalog/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};