import {useDispatch} from "react-redux";
import {changeCategory} from "../../store/category/categorySlice";
import {useEffect} from "react";
import {API_URI} from "../../const";

import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import './Navigation.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCategories} from "../../store/category/categoryActionCreators";

export const Navigation = () => {
    const {category, activeCategory} = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const handleChange = (event, newCategory) => {
        const index = category.map(cat => cat.title).indexOf(newCategory);
        dispatch(changeCategory({indexCategory: index}))
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper>
                <ToggleButtonGroup
                    sx={{display: 'flex'}}
                    color="primary"
                    value={category[activeCategory]?.title}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    {category.map((cat) =>
                        <ToggleButton value={cat.title} key={cat.title} sx={{flex: '1 0 auto'}}>
                            <Box>
                                <Typography variant="body1" gutterBottom>
                                    {cat.rus}
                                </Typography>
                                <Box className="image" sx={{backgroundImage: `url(${API_URI}/${cat.image})`}}>
                                </Box>
                            </Box>
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
            </Paper>
        </Box>
    );
};