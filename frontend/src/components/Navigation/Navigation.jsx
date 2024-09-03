import {useDispatch, useSelector} from "react-redux";
import {categoryRequestAsync, changeCategory} from "../../store/category/categorySlice.js";
import {useEffect} from "react";
import {API_URI} from "../../const.js";

import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import {BaseImage} from "../UI/BaseImage/BaseImage.jsx";

export const Navigation = () => {
    const {category, activeCategory} = useSelector((state) => state.category)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryRequestAsync());
    }, []);

    const handleChange = (event, newCategory) => {
        const index = category.map(cat => cat.title).indexOf(newCategory);
        dispatch(changeCategory({indexCategory: index}))
    };

    return (
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
                        <BaseImage path={`${API_URI}/${cat.image}`} width={20} height={10}/>
                    </Box>
                </ToggleButton>
            )}
        </ToggleButtonGroup>
    );
};