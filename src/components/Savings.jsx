import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import TotalChip from './TotalChip/TotalChip';

const baseColumnConfig = {
  type: 'number',
  flex: 1,
  align: 'left',
  headerAlign: 'left',
  sortable: false,
  valueFormatter: (params) =>
    `${Intl.NumberFormat('el-GR', {
      style: 'currency',
      currency: 'EUR',
    }).format(params.value)}`,
};

const columns = [
  {
    field: 'standardCase',
    headerName: 'Standard Case',
    description: `This is the most possible scenario, it's the incomes - expenses without any factor`,
    ...baseColumnConfig,
  },
  {
    field: 'bestCase',
    headerName: 'Best Case',
    description: `This is the best scenario, it's the maximum incomes - minimum expenses`,
    ...baseColumnConfig,
  },
  {
    field: 'worstCase',
    headerName: 'Worst Case',
    description: `This is the worst scenario, it's the minimum incomes - maximum expenses`,
    ...baseColumnConfig,
  },
];

const Savings = ({ sums }) => (
  <Box>
    <Typography variant='h4' mb={5} textAlign='center'>
      Savings
    </Typography>

    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <DataGrid rows={sums} columns={columns} autoHeight disableColumnMenu />
    </Box>

    <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
      <TotalChip
        labelTitle='Worst Case'
        labelValue={sums[0]?.worstCase}
        color='primary'
        variant='outlined'
        sx={{ fontSize: 14 }}
      />
      <TotalChip
        labelTitle='Best Case'
        labelValue={sums[0]?.bestCase}
        color='primary'
        variant='outlined'
        sx={{ fontSize: 14 }}
      />
      <TotalChip
        labelTitle='Standard Case'
        labelValue={sums[0]?.standardCase}
        color='primary'
        variant='filled'
        sx={{ fontSize: 14 }}
      />
    </Box>
  </Box>
);

export default Savings;
