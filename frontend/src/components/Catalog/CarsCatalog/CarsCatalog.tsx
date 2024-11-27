import {useEffect} from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';

import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux";
import {fetchCars} from "../../../store/cars/carsAsyncActions";
import CarItem from "../CarsItem/CarItem";

export const CarsCatalog = () => {
    const dispatch = useTypedDispatch();

    const { cars } = useTypedSelector(state => state.cars);
    const { category, activeCategory } = useTypedSelector(state => state.category);

    useEffect(() => {
        if(category.length) {
            dispatch(fetchCars(category[activeCategory]?.title));
        }
    }, [category, activeCategory]);

    return (
        <>
            <Box sx={{padding: '20px 0'}}>
                <Grid container spacing={2}>
                    {cars.length ? (
                        <>
                            {cars.map((car) => (
                                <Grid size={4} key={car.id}>
                                    <CarItem car={car}/>
                                </Grid>
                            ))}
                        </>
                    )
                        : (
                            <Grid size={12} sx={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                                <Typography variant="body1">По данной марке нет автомобилей</Typography>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </>
    );
};