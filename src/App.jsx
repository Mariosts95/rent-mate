import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// If I import Box as default it throws this error
// Uncaught TypeError: createTheme_default is not a function
import { Box, Typography } from '@mui/material';

import Expenses from './components/Expenses';
import Incomes from './components/Incomes';
import PageWrapper from './components/PageWrapper';
import Savings from './components/Savings';
import TotalChip from './components/TotalChip/TotalChip';

import { calculateSums, randomId } from './utils/general';

const App = () => {
  const incomes = useSelector((state) => state.incomes);
  const expenses = useSelector((state) => state.expenses);

  const incomesSums = useMemo(() => calculateSums(incomes), [incomes]);
  const expensesSums = useMemo(() => calculateSums(expenses), [expenses]);

  const sums = useMemo(
    () => [
      {
        standardCase: incomesSums.total - expensesSums.total,
        bestCase: incomesSums.max - expensesSums.min,
        worstCase: incomesSums.min - expensesSums.max,
        id: randomId(),
      },
    ],
    [
      incomesSums.min,
      incomesSums.max,
      incomesSums.total,
      expensesSums.min,
      expensesSums.max,
      expensesSums.total,
    ],
  );

  return (
    <PageWrapper>
      <Typography variant='h2' textAlign='center' m={2}>
        Rent Mate
      </Typography>

      <Box
        my={1}
        display='flex'
        gap={2}
        justifyContent='center'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Box width='100%'>
          <Incomes />

          <Box
            display='flex'
            justifyContent='center'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
          >
            <TotalChip
              labelTitle='Total Min Income'
              labelValue={incomesSums.min}
              color='success'
              variant='outlined'
              sx={{ fontSize: 14 }}
            />
            <TotalChip
              labelTitle='Total Max Income'
              labelValue={incomesSums.max}
              color='success'
              variant='outlined'
              sx={{ fontSize: 14 }}
            />
            <TotalChip
              labelTitle='Total Income'
              labelValue={incomesSums.total}
              color='success'
              variant='filled'
            />
          </Box>
        </Box>

        <Box width='100%'>
          <Expenses />

          <Box
            display='flex'
            justifyContent='center'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
          >
            <TotalChip
              labelTitle='Total Min Expenses'
              labelValue={expensesSums.min}
              color='error'
              variant='outlined'
              sx={{ fontSize: 14 }}
            />
            <TotalChip
              labelTitle='Total Max Expenses'
              labelValue={expensesSums.max}
              color='error'
              variant='outlined'
              sx={{ fontSize: 14 }}
            />
            <TotalChip
              labelTitle='Total Expenses'
              labelValue={expensesSums.total}
              color='error'
              variant='filled'
            />
          </Box>
        </Box>
      </Box>

      <Box my={2} maxWidth={800} mx='auto'>
        <Savings sums={sums} />

        {/* <Box display='flex' justifyContent='center'>
          <TotalChip
            labelTitle='Min Total'
            labelValue={sums.min}
            color='primary'
            variant='outlined'
            sx={{ fontSize: 14 }}
          />
          <TotalChip
            labelTitle='Max Total'
            labelValue={sums.max}
            color='primary'
            variant='outlined'
            sx={{ fontSize: 14 }}
          />
          <TotalChip labelTitle='Total' labelValue={sums.total} color='primary' variant='filled' />
        </Box> */}
      </Box>
    </PageWrapper>
  );
};

export default App;
