import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { isNil } from 'lodash';

const FormInputDate = ({ name, label, labelVariant = 'float', control, rules, format = 'DD/MM/YYYY' }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl error={error ? !isNil(error.message) : null} fullWidth>
            <DatePicker
              sx={{ width: '100%' }}
              inputFormat={format}
              value={value}
              onChange={onChange}
              render={({ ...params }) => {
                console.log('params', params);
                return <TextField {...params} />;
              }}
              label={labelVariant === 'float' ? label : undefined}
            />
            <FormHelperText>{error ? error.message : null}</FormHelperText>
          </FormControl>
        )}
      />
    </LocalizationProvider>
  );
};

export default FormInputDate;
