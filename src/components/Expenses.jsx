import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { add, remove } from '../store/slices/expensesSlice';

import MainTable from './MainTable/MainTable';

const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <Box>
      <Typography variant='h4' mb={5} textAlign='center'>
        Expenses
      </Typography>

      <MainTable rows={expenses} add={add} remove={remove} />
    </Box>
  );
};

export default Expenses;
