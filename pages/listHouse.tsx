import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

// For Modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

/**
 * ListHouse Modal Component
 * @description Modal for showing the list of houses in a community
 * @param community
 * @param home
 * @param hide 
 * @returns 
 */
export default function ListHouse({community, home, hide}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get specific houses in a specific community.
  const filteredHomes = home?.filter(row => row.communityId === community.id) || [];

  return (
    <div>
      <Button sx={{ borderRadius: 6 }} variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleOpen} disabled={hide}>
        Visit 
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} fontFamily={'monospace'}>
                  {community.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'sans-serif'}>
                Group: {community.group}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="right">
                <Tooltip title="Delete" onClick={handleClose}>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">House Type</TableCell>
                  <TableCell align="center">Area&nbsp;(sq. ft)</TableCell>
                  <TableCell align="center">Price&nbsp;(CAD)</TableCell>
                  <TableCell align="center">Book Visit Now</TableCell>
                  <TableCell align="center">Rent</TableCell>
                  <TableCell align="center">Buy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredHomes?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.type}
                    </TableCell>
                    <TableCell align="center">{row.area}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                    <TableCell align="center">
                      <Button sx={{ borderRadius: 6 }} variant="contained">Book Visit</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button sx={{ borderRadius: 6 }} color='secondary' variant="contained">Rent</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button sx={{ borderRadius: 6 }} color='success' variant="contained">Buy</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}