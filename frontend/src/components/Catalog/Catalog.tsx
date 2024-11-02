import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import {
    Button,
    Card,
    CardActions,
    CardContent, Chip, Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';

import {API_URI} from "../../const";
import {BaseImage} from "../UI/BaseImage/BaseImage";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {fetchCars} from "../../store/cars/carsAsyncActions";

export const Catalog = () => {
    const { cars } = useTypedSelector(state => state.cars);
    const { category, activeCategory } = useTypedSelector(state => state.category);

    const dispatch = useTypedDispatch();

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
                                    <Card>
                                        <CardContent>
                                            <BaseImage path={`${API_URI}/${car.image}`} width={120} height={80}/>
                                            <Typography sx={{padding: '8px 0'}} variant="h5" component="div">{car.title}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="column" justifyContent="space-between" spacing={2}>
                                                <Grid>
                                                    <Stack direction="row" spacing={1}>
                                                        <Chip label={`Поколение ${car.generation}`} />
                                                        {car.restyle && (
                                                            <Chip label="Рестайлинг" />
                                                        )}
                                                    </Stack>
                                                </Grid>
                                                <Grid>
                                                    <Link to={`/model/${car.title}`}><Button variant="contained" size="small">Подробнее</Button></Link>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
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