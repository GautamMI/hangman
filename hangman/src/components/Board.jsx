import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Board = () => {
    const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    console.log('leaderBoard is called');
    

    const columns = [
        {field:'id', headerName : 'ID', width:30},
        {field: 'name', headerName : 'Name', width:100},
        {field: 'score', headerName : 'Score', width:20}
    ]

    const rows = [
        { id:1, name: 'User 1', score: 100 },
        { id:2,name: 'User 2', score: 200 },
        { id:3,name: 'User 3', score: 150 },
        // Add more players here as needed
      ];
      return (
  <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
        </Box>
    </Modal>
  </>
        
      );
}