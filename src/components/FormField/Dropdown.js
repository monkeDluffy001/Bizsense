import { MenuItem, Select, FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { isNil } from 'lodash';

const Dropdown = ({ name, label, labelVariant = 'float', control, rules, options = [] }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={error ? !isNil(error.message) : null} fullWidth>
          {labelVariant === 'float' && <InputLabel>{label}</InputLabel>}
          <Select onChange={onChange} value={value} fullWidth>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default Dropdown;
