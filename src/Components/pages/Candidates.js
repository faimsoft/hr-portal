import React from 'react'
import { Box, Typography } from "@material-ui/core"
import CandiDR from '../Candidates/Drawer2/CandiDR'
const Candidates = () => {
    return (
        <div>
            <CandiDR />
            <Box py={20} textAlign="center">
                <Typography variant="h1"> Welcome To Home</Typography>
            </Box>
        </div>
    )
}

export default Candidates
