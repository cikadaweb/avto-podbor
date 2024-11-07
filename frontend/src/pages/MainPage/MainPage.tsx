import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";

import {Navigation} from "../../components/Navigation/Navigation";
import {Catalog} from "../../components/Catalog/Catalog";
import {CatalogFilters} from "../../components/CatalogFilters/CatalogFilters";

export const MainPage = () => {

    return (
        <>
            <Navigation/>

            <Box>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <CatalogFilters/>
                    </Grid>
                    <Grid size={8}>
                        <Catalog/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};