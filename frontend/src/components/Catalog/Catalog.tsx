import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import {
    Button,
    Card,
    CardActions,
    CardContent,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import {API_URI} from "../../const";
import {BaseImage} from "../UI/BaseImage/BaseImage";
import {productRequestAsync} from "../../store/product/productSlice";

export const Catalog = () => {
    const { products } = useSelector(state => state.product);
    const { category, activeCategory } = useSelector(state => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if(category.length) {
            dispatch(productRequestAsync(category[activeCategory]?.title));
        }
    }, [category, activeCategory]);

    return (
        <>
            <Box sx={{padding: '20px 0'}}>
                <Grid container spacing={2}>
                    {products.length ? (
                        <>
                            {products.map((product) => (
                                <Grid item xs={4} key={product.id}>
                                    <Card>
                                        <CardContent>
                                            <BaseImage path={`${API_URI}/${product.image}`} width={120} height={80}/>
                                            <Typography sx={{padding: '8px 0'}} variant="h5" component="div">{product.title}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container justifyContent="space-between">
                                                <Grid item>
                                                    <Link to={`/model/${product.title}`}><Button variant="contained" size="small">Подробнее</Button></Link>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </>
                    )
                        : (
                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                                <Typography variant="body1">По данной марке нет автомобилей</Typography>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </>
    );
};