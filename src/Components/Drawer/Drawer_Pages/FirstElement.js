import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Toolbar} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../../Drawer/sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';


// import './FirstElement.css';
// import data from './mock-data.json';

const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:250,
       paddingRight:10
   }

}))

const FirstElement = () => {
          const classes = useStyles();
        //   const [contacts, setcontacts] = useState(data)

    return (
        <>
        <Sidebar/>
        <div className={classes.box}>
            <div>
            <h1 >Welcome to table</h1>
            <Button variant="outlined"  component={Link} to="/CreatePage">create button</Button>
            </div>
            

          {/* <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Address</th>
                   <th>Phone Number</th>
                   <th>Email</th>
               </tr>
           </thead>
           <tbody>
               {contacts.map((contact) =>(
                   <tr>
                   <td>{contact.fullName}</td>
                   <td> {contact.address}</td>
                   <td>{contact.phoneNumber}</td>
                   <td> {contact.email}</td>
               </tr>
               ))}
           </tbody>
          </table>   */}
        </div>
    </>
    )
}


export default FirstElement

