import {Order} from "../Order/Order.jsx";
import {Container} from "../Container/Container.jsx";
import style from './Catalog.module.css';
import {CatalogProduct} from "../CatalogProduct/CatalogProduct.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {productRequestAsync} from "../../store/product/productSlice.js";

import FavoriteIcon from '@mui/icons-material/Favorite';
import {API_URI} from "../../const.js";
import {BaseImage} from "../UI/BaseImage/BaseImage.jsx";

import {
    Card,
    Drawer,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Typography,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider
} from "@mui/material";

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export const Catalog = ({isSidebarOpen, toggleSidebar}) => {
    const { products } = useSelector(state => state.product);
    const { category, activeCategory } = useSelector(state => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if(category.length) {
            dispatch(productRequestAsync(category[activeCategory]?.title));
        }
    }, [category, activeCategory]);


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {category.map((cat, index) => (
                    <ListItem key={cat.title} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={cat.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Drawer open={isSidebarOpen} onClose={toggleSidebar(false)}>
                    {DrawerList}
                </Drawer>

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
                                                {/*<Grid item>*/}
                                                {/*    <Link to={`/character/${character.id}`}><Button size="small">Подробнее</Button></Link>*/}
                                                {/*</Grid>*/}
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

// <section className={style.catalog}>
//     <div className={style.wrapper}>
//         <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
//
//         <div className={style.wrap_list}>
//             {products.length ? (
//                 <ul className={style.list}>
//                     {products.map(item => (
//                         <li key={item.id} className={style.item}>
//                             <CatalogProduct item={item}/>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p className={style.empty}>К сожалению товаров данной категории нет</p>
//             )}
//
//         </div>
//     </div>
// </section>