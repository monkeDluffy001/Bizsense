import { Box, Typography } from '@mui/material';
import { getInputComponent } from './getInputComponent';
import { memo } from 'react';
import { isEmpty } from 'lodash';

const styles = () => {
  return {
    mb: 1
  };
};

const FormField = (props) => {
  const { validations } = props;

  const Component = getInputComponent(props.type);

  const rules = {
    validate: (value) => {
      if (validations) {
        let firstError = '';
        validations.forEach((validation) => {
          const error = validation(value);
          if (error) {
            firstError = isEmpty(firstError) ? error : firstError;
          }
        });
        return isEmpty(firstError) ? true : firstError;
      } else {
        return true;
      }
    }
  };

  return (
    <Box sx={styles}>
      {props.labelVariant === 'fixed' && props.label && (
        <Box className="items-center">
          <Typography mr={1}>{props.label}</Typography>
          {props.required && <Typography color="red">*</Typography>}
        </Box>
      )}
      <Component {...props} rules={rules} required={undefined} />
    </Box>
  );
};

export default memo(FormField);
