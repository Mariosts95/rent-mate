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

  const summary = sumArray(incomesValues) - sumArray(expensesValues);

  return (
    <PageWrapper>
      <Typography variant='h1' textAlign='center' m={5} color='theme'>
        Rent Mate
      </Typography>

      <Box my={5}>
        <Incomes />
        <Chip
          label={`Total incomes: ${sumArray(incomesValues)}`}
          color='success'
          variant='outlined'
          sx={{ mt: 2 }}
        />
      </Box>

      <Box my={5}>
        <Expenses />
        <Chip
          label={`Total expenses: ${sumArray(expensesValues)}`}
          color='error'
          variant='outlined'
          sx={{ mt: 2 }}
        />
      </Box>

      <Typography
        variant='h2'
        textAlign='center'
        m={5}
        color={summary === 0 ? 'black' : summary > 0 ? 'success' : 'error'}
      >
        Money Left: {summary}€
      </Typography>
    </PageWrapper>
  );
};

export default App;
