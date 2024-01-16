import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { add, remove } from '../store/slices/incomesSlice';

import MainTable from './MainTable/MainTable';

const Incomes = () => {
  const incomes = useSelector((state) => state.incomes);

  return (
    <Box>
      <Typography variant='h4' mb={5} textAlign='center'>
        Incomes
      </Typography>

      <MainTable rows={incomes} add={add} remove={remove} />
    </Box>
  );
};

export default Incomes;
