import FormTextField from './FormTextField';
import FormInputDate from './FormInputDate';
import Dropdown from './Dropdown';

const TYPES = {
  TEXTFIELD: 'text',
  PASSWORD: 'password',
  SELECT: 'select',
  DATE: 'date'
};

export const getInputComponent = (type) => {
  switch (type) {
    case TYPES.PASSWORD:
      return FormTextField;
    case TYPES.DATE:
      return FormInputDate;
    case TYPES.SELECT:
      return Dropdown;
    default:
      return FormTextField;
  }
};
