
import React from 'react'
import {Box,Typography} from "@material-ui/core"
import Sidebar from '../../Drawer/sidebar'


const SecondElement = () => {
    return (
        <div>
           <Sidebar/>

        <Box py={20} textAlign="center">
            <Typography  variant="h1"> SecondElement</Typography>
        </Box>
        </div>
    )
}

export default SecondElement

