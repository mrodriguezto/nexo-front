import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputBase,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { adDescriptionField as strings } from '../strings';
import { withStyles } from 'tss-react/mui';
import {
  CalendarMonth,
  Close,
  LocationOnOutlined,
  SellOutlined,
} from '@mui/icons-material';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import { topics } from 'common/constants';
import { disciplines, keywords } from '../../../common/constants/tags';
import LocationAutocomplete from 'common/components/Autocomplete/LocationAutocomplete';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

type FormData = {
  expiration_date: string;
};

const AdDescriptionField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { register, formState: {errors, isValid}, watch, control, setValue, getValues} = useForm<FormData>({
    mode: 'onChange',
  }); // prettier-ignore

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Box paddingLeft={1.5} marginBottom={1}>
        <Typography id="persona-select">{strings.ad_lbl}</Typography>
      </Box>
      <AdFormControl fullWidth>
        <Stack>
          <TitleInput
            placeholder={strings.title_lbl}
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />

          <DescriptionInput
            multiline
            rows={10}
            onChange={(event) => setDescription(event.target.value)}
            placeholder={strings.description_lbl}
            value={description}
          />

          <ExtraInputsButton onClick={handleOpen}>
            <SellOutlined />
            <LocationOnOutlined />
            <CalendarMonth />
          </ExtraInputsButton>
        </Stack>
      </AdFormControl>
      <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <Box paddingX={2} paddingY={4}>
          <DialogTitle marginBottom={3}>
            <Typography color="primary" variant="h2" component="h3">
              Agregar detalles
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
              }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Stack gap={4}>
              <TagsAutoComplete
                label="Agrega tags"
                maxTags={5}
                freeSolo
                minTags={1}
                onUpdate={() => {}}
                options={[...topics, ...disciplines, ...keywords]}
              />
              <LocationAutocomplete
                id="job-ad-location"
                label="Ubicación"
                updateValue={() => {}}
              />

              <Controller
                control={control}
                name="expiration_date"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <DatePicker
                    value={value}
                    onChange={(value) => onChange(dayjs(value).format())}
                    label="Fecha de vencimiento"
                    renderInput={(params) => (
                      <TextField
                        helperText={error?.message}
                        id="expiration_date"
                        name="expiration_date"
                        {...params}
                        error={Boolean(error)}
                      />
                    )}
                  />
                )}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Confirmar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

const TitleInput = withStyles(InputBase, (theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 700,
    '& input': {
      textTransform: 'uppercase',
      '&::placeholder': {
        color: 'black',
      },
    },
  },
}));

const DescriptionInput = withStyles(InputBase, (theme) => ({
  root: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const AdFormControl = withStyles(FormControl, (theme) => ({
  root: {
    border: '1px solid #cfcfcf',
    borderRadius: 5,
    padding: '1em',
    ':hover': {
      borderColor: 'black',
    },
    ':focus-within': {
      borderColor: theme.palette.primary.main,
      outline: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

const ExtraInputsButton = withStyles(ButtonBase, (theme) => ({
  root: {
    borderRadius: 8,
    padding: '0.5em 0.5em',
    justifyContent: 'flex-start',
    color: theme.palette.primary.main,
  },
}));

export default AdDescriptionField;
