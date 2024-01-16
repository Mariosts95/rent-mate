import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// TODO
// import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import ModalForm from './ModalForm';

const MainTable = ({ rows, add, remove }) => {
  const dispatch = useDispatch();

  // TODO
  // const handleEditClick = (id) => () => {};

  const handleDeleteClick = (id) => () => {
    dispatch(remove(id));
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => [
        // TODO
        /* GridActionsCellItem
            key='Edit'
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            onClick={handleEditClick(id)}
            color='inherit'
          />, */
        <GridActionsCellItem
          key='Delete'
          icon={<DeleteIcon />}
          label='Delete'
          onClick={handleDeleteClick(id)}
          color='inherit'
        />,
      ],
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      editMode='row'
      autoHeight
      slots={{
        toolbar: () => (
          <ModalForm
            title='Add'
            buttonText='Add'
            handleSubmit={(data) => {
              dispatch(add(data));
            }}
          />
        ),
      }}
    />
  );
};

export default MainTable;
