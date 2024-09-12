import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

import {Navigation} from "../../components/Navigation/Navigation.tsx";
import {Catalog} from "../../components/Catalog/Catalog.tsx";
import {CatalogFilters} from "../../components/CatalogFilters/CatalogFilters.tsx";

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