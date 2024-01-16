import { useSelector } from 'react-redux';

import { Box, Chip, Typography } from '@mui/material';

import Expenses from './components/Expenses';
import Incomes from './components/Incomes';
import PageWrapper from './components/PageWrapper';

import { sumArray } from './utils/general';

const App = () => {
  const incomes = useSelector((state) => state.incomes);

  const expenses = useSelector((state) => state.expenses);

  const incomesValues = incomes.map((x) => x.value);
  const expensesValues = expenses.map((x) => x.value);

  const incomesMinValues = incomes.map((x) => x.min || x.value);
  const expensesMinValues = expenses.map((x) => x.min || x.value);

  const incomesMaxValues = incomes.map((x) => x.max || x.value);
  const expensesMaxValues = expenses.map((x) => x.max || x.value);

  const summary = sumArray(incomesValues) - sumArray(expensesValues);
  const minSummary = sumArray(incomesMinValues) - sumArray(expensesMinValues);
  const maxSummary = sumArray(incomesMaxValues) - sumArray(expensesMaxValues);

  return (
    <PageWrapper>
      <Typography variant='h1' textAlign='center' m={5} color='theme'>
        Rent Mate
      </Typography>

      <Box my={5}>
        <Incomes />
        <Chip
          label={`Total income: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(incomesValues))}`}
          color='success'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Total min income: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(incomesMinValues))}`}
          color='success'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Total max income: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(incomesMaxValues))}`}
          color='success'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
      </Box>

      <Box my={5}>
        <Expenses />
        <Chip
          label={`Total expenses: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(expensesValues))}`}
          color='error'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Total min expenses: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(expensesMinValues))} `}
          color='error'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Total expenses: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(sumArray(expensesMaxValues))}`}
          color='error'
          variant='outlined'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
      </Box>

      <Box my={2}>
        <Chip
          label={`Min Money Left: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(minSummary)}`}
          color='primary'
          variant='filled'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Money Left: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(summary)}`}
          color='primary'
          variant='filled'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
        <Chip
          label={`Max Money Left: ${Intl.NumberFormat('el-GR', {
            style: 'currency',
            currency: 'EUR',
          }).format(maxSummary)}`}
          color='primary'
          variant='filled'
          sx={{ mt: 2, mx: 1, fontSize: 24, p: 2, height: 'auto' }}
        />
      </Box>
    </PageWrapper>
  );
};

export default App;
