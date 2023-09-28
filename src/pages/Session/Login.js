import { Button } from '@mui/material';
import { getList } from 'actions/reqres';
import { FormField } from 'components';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const { control, reset, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      password: '',
      fromDate: null,
      select: ''
    }
  });

  const options = [
    {
      label: 'Dropdown Option 1',
      value: '1'
    },
    {
      label: 'Dropdown Option 2',
      value: '2'
    }
  ];

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const onClick = () => {
    reset({
      userName: 'Kamlesh',
      password: '',
      fromDate: new Date(),
      select: '2'
    });
  };

  const onSubmit = (data, e) => {
    console.log(data, e);
  };

  const required = (v) => (v ? undefined : 'This is required field.');

  const length = (v) => (v.length === 10 ? undefined : 'This is 10 char field.');

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        Set Values
      </Button>
      <form>
        <FormField
          name="userName"
          label="Enter name"
          placeholder="Some placeholder"
          control={control}
          validations={[required, length]}
          required={true}
        />
        <FormField
          name="password"
          label="Enter password"
          type="password"
          control={control}
          placeholder="Some password"
          validations={[required, length]}
          required={true}
        />
        <FormField name="fromDate" label="Date" type="date" control={control} validations={[required]} />
        <FormField
          name="select"
          label="Select Dropdown"
          type="select"
          control={control}
          options={options}
          validations={[required]}
        />
        <Button type="submit" variant="contained" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
