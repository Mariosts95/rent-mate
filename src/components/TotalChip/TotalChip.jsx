import Chip from '@mui/material/Chip';

const TotalChip = ({ labelTitle, labelValue, sx, ...rest }) => (
  <Chip
    label={`${labelTitle} : ${Intl.NumberFormat('el-GR', {
      style: 'currency',
      currency: 'EUR',
    }).format(labelValue)}`}
    sx={{ mt: 2, mx: 1, fontSize: 18, p: 2, height: 'auto', ...sx }}
    {...rest}
  />
);

export default TotalChip;
