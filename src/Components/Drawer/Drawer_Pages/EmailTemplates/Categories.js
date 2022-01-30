import React, { useState, useEffect } from 'react'
import { Container,Toolbar,TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox,} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../../SideBar/sidebar';
import { makeStyles, } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:250,
       paddingRight:10
   },
   root: {

        width: "85vw",
        paddingTop: theme.spacing(5),

    },
    Create: {
        paddingLeft: theme.spacing(),
        display: 'flex'

    }

}))

const Categories = () => {
               const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
 
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    }
    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height:200,
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 24,
  p: 5,
 borderRadius: 10
};

    return (
        <>
        <Sidebar/>
        <div className={classes.box}>
             <Container className={classes.Create} >
                <div style={{ flexGrow: 1 }}>
                </div>
                <Button color="primary"component={Link} onClick={handleOpen} variant="contained" disableElevation>
                    Create
                </Button>
                            {/* table */}
            </Container>
            <Container className={classes.root} >
                <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell><Button variant="text"><Checkbox {...label} /></Button>Name</TableCell>
                                <TableCell align="center"> Action </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell>
                                        <Button variant="text"><Checkbox {...label} /></Button>Aaqil
                                        
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="text" ><EditIcon color="primary" /></Button>
                                        <Button variant="text"><DeleteIcon color="error" /></Button>
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <TablePagination
                        rowsPerPageOptions={[3, 5, 8, 10, 12, 15]}
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={onChangePage}
                    />
                </TableContainer>
            </Container>
            </div>
            {/* Modal */}
             <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography align="center" id="modal-modal-title"  variant="h6" style={{ fontWeight: 600 }}>
            Add a New Category
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
            <TextField
                id="outlined-size-small"
                size="small"
                placeholder="Type the name...."
                style={{ width: 250 }}
            />
                            <Toolbar/>
                            <Button
                                color="primary"
                                variant="contained"
                                disableElevation
                                align="center"
                            >
                            Add
                            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
    )
}

export default Categories
