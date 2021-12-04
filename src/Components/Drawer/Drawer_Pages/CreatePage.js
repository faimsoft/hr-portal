import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Toolbar} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from '../sidebar';


const useStyles = makeStyles((theme) => ({
   create:{
       paddingLeft:250,
       paddingRight:10
   },
   center:{
       paddingLeft:340
   }

}))

const CreatePage = () => {
              const classes = useStyles();

    return (
        <div  className={classes.center}  >
                    <Sidebar/>
            <Box  className={classes.create}
                  component={Paper}  
                  component="form"
                         sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
                 >
                <Toolbar/>
                <h1>Create Field</h1>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <Toolbar/>
                 <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="1 World"
                    />
                
            </Box>
        </div>
    )
}
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
];
export default CreatePage
