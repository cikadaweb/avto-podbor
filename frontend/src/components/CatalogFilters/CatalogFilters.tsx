import {useState} from "react";

import {
    Card,
    CardContent,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Slider
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import {API_URI} from "../../const";

interface ITransmissionItem {
    id: string,
    title: string
}

export const CatalogFilters = () => {

    const [value, setValue] = useState<number[]>([100, 600]);

    const [transmission, setTransmission] = useState('');

    const handleTransmissionChange = (event: SelectChangeEvent) => {
        setTransmission(event.target.value);
    };
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const renderTransmissionItems = () => {
        const transmissionTypes: ITransmissionItem[] = [
            {id: 'mechanic', title: 'Механическая'},
            {id: 'auto', title: 'Автоматическая'},
            {id: 'robot', title: 'Робот'},
            {id: 'variator', title: 'Вариатор'}
        ];

        return transmissionTypes.map((item: ITransmissionItem) => (
            <MenuItem key={item.id} value={item.id}>
                {item.title}
            </MenuItem>
        ));
    };

    return (
        <Box component="form" sx={{padding: '20px 0'}}>
            <Card>
                <CardContent>
                    <Grid container spacing={4}>

                        <Grid size={12}>
                            <Typography sx={{padding: '8px 0'}} variant="h5" component="div">Фильтр</Typography>
                        </Grid>

                        <Grid size={12}>
                            <FormControl sx={{width: '50%'}}>
                                <InputLabel htmlFor="priceFrom">Цена от, &#8381;</InputLabel>
                                <Input id="priceFrom" aria-describedby="my-helper-text" />
                            </FormControl>

                            <FormControl sx={{width: '50%'}}>
                                <InputLabel htmlFor="priceTo">до</InputLabel>
                                <Input id="priceTo" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>

                        <Grid size={12}>
                            <FormControl sx={{width: '100%'}}>
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Коробка</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={transmission}
                                    label="Коробка"
                                    onChange={handleTransmissionChange}
                                >
                                    {renderTransmissionItems()}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};