import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { GridToolbarContainer } from '@mui/x-data-grid';

const ModalForm = ({ title, buttonText, handleSubmit }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    value: '',
    factor: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <GridToolbarContainer>
      <Button color='primary' startIcon={<AddIcon />} onClick={handleOpen}>
        {buttonText}
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <Box component='form' autoComplete='off' onSubmit={onSubmit} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  required
                  label='Name'
                  variant='outlined'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Value'
                  variant='outlined'
                  name='value'
                  type='number'
                  sx={{
                    '& input[type=number]::-webkit-outer-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                  }}
                  helperText='Please provide a number'
                  value={formData.value}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  name='factor'
                  options={['5', '10', '15', '20']}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Factor'
                      helperText='This factor is used to calculate some min and max values'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} display='flex' justifyContent='flex-end'>
                <Button type='submit' variant='contained' color='primary' sx={{ display: 'block' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </GridToolbarContainer>
  );
};

export default ModalForm;
