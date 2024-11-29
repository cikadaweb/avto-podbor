import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import FlagIcon from '@mui/icons-material/Flag';
import Grid from '@mui/material/Grid2';

import { BaseImage } from '../../UI/BaseImage/BaseImage';
import { ICarItem } from '../../../types/cars';
import { API_URI } from '../../../const';
import { checkMileageValidity } from '../../../helpers/checkMilleageValidity/checkMilleageValidity';
import {
  MileageStatusColors,
  MileageStatusDescriptions,
} from '../../../constants/MileageStatuses';

interface ICarItemProps {
  car: ICarItem;
}

const CarItem = ({ car }: ICarItemProps) => {
  const mileageStatus = checkMileageValidity(car.year, car.mileage);

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={2}>
          <Grid size={12}>
            <BaseImage
              path={`${API_URI}/${car.image}`}
              width={120}
              height={80}
            />
          </Grid>

          <Grid size={12}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              spacing={2}>
              <Grid size={12}>
                <Typography
                  sx={{ fontSize: '30px' }}
                  variant="h5"
                  component="div">
                  {car.title}
                </Typography>
              </Grid>

              <Grid container direction="column" size={12}>
                <Grid
                  container
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ flexWrap: 'false' }}>
                  <Grid>
                    <Typography variant="body2" component="span">
                      Пробег: .............................
                    </Typography>
                  </Grid>

                  <Grid>
                    <Chip
                      label={`${car.mileage} км`}
                      size="small"
                      color="primary"
                      variant="outlined"
                      onClick={() => {}}
                      onDelete={() => {}}
                      deleteIcon={<FlagIcon />}
                    />
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid>
                    <Typography variant="body2" component="span">
                      Оценка: ....
                    </Typography>
                  </Grid>
                  <Chip
                    label={MileageStatusDescriptions[mileageStatus]}
                    color={MileageStatusColors[mileageStatus]}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12}>
            <Stack direction="row" spacing={1}>
              <Chip label={`Поколение ${car.generation}`} />
              {car.restyle && <Chip label="Рестайлинг" />}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ padding: '16px' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={2}>
          <Grid size={12}>
            <Link to={`/model/${car.title}`}>
              <Button variant="contained" size="small">
                Цена от {car.price}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default CarItem;
