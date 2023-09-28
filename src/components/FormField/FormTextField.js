import { Controller } from 'react-hook-form';
import { TextField, FormControl, FormHelperText } from '@mui/material';
import { isNil } from 'lodash';

const FormTextField = ({ name, control, labelVariant = 'float', variant = 'outlined', rules, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <FormControl error={error ? !isNil(error.message) : null} fullWidth>
          <TextField
            {...rest}
            onChange={onChange}
            value={value}
            fullWidth
            variant={variant}
            label={labelVariant === 'float' ? rest.label : undefined}
          />
          <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FormTextField;
